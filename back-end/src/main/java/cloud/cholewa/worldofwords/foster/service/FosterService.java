package cloud.cholewa.worldofwords.foster.service;

import cloud.cholewa.worldofwords.category.entity.Category;
import cloud.cholewa.worldofwords.category.service.CategoryService;
import cloud.cholewa.worldofwords.core.configuration.DefaultAdmin;
import cloud.cholewa.worldofwords.core.exceptions.UserNotCreatedException;
import cloud.cholewa.worldofwords.core.exceptions.UserNotFoundException;
import cloud.cholewa.worldofwords.core.helpers.Clock;
import cloud.cholewa.worldofwords.foster.boundary.FosterCreate;
import cloud.cholewa.worldofwords.foster.boundary.FosterRepository;
import cloud.cholewa.worldofwords.foster.boundary.FosterResponse;
import cloud.cholewa.worldofwords.foster.entity.Foster;
import cloud.cholewa.worldofwords.user.boundary.UserRepository;
import cloud.cholewa.worldofwords.user.entity.User;
import cloud.cholewa.worldofwords.word.boundary.WordCreate;
import cloud.cholewa.worldofwords.word.entity.Word;
import cloud.cholewa.worldofwords.word.service.WordService;
import lombok.AllArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class FosterService {

    private DefaultAdmin admin;
    private PasswordEncoder encoder;
    private FosterRepository fosterRepository;
    private FosterMapper fosterMapper;
    private UserRepository userRepository;
    private WordService wordService;
    private CategoryService categoryService;

    @EventListener(ApplicationReadyEvent.class)
    public void addDefaultAdmin() {
        if (areUserDetailsUnique(admin.getUserName(), admin.getEmail())) {
            createFoster(admin.getUserName(),
                    admin.getPassword(),
                    admin.getFirstName(),
                    admin.getLastName(),
                    admin.getEmail());
        }
    }

    public List<FosterResponse> getAllFosters() {
        return fosterMapper.mapFosterListToFosterResponse(fosterRepository.findAll());
    }

    public FosterResponse getById(Long id) {
        Foster foster = fosterRepository.findById(id).orElseThrow(() -> new UserNotFoundException("Foster not found"));
        return fosterMapper.mapFosterToFosterResponse(foster);
    }

    public FosterResponse addFoster(FosterCreate fosterCreate) {
        if (!isUserNameUnique(fosterCreate.getUserName())) {
            throw new UserNotCreatedException("User not created - user name already exists");
        } else if (!isUserEmailUnique(fosterCreate.getEmail())) {
            throw new UserNotCreatedException("User not created - email already exists");
        } else {
            return createFoster(fosterCreate.getUserName(),
                    fosterCreate.getPassword(),
                    fosterCreate.getFirstName(),
                    fosterCreate.getLastName(),
                    fosterCreate.getEmail());
        }
    }

    public FosterResponse deleteFoster(Long id) {
        Foster foster = fosterRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User with id: " + id + " not found"));
        User user = foster.getUser();
        fosterRepository.delete(foster);
        userRepository.delete(user);

        return fosterMapper.mapFosterToFosterResponse(foster);
    }

    public FosterResponse updateFoster(Long id, FosterCreate fosterCreate) {
        Foster foster = fosterRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User with id: " + id + " not found"));
        User user = foster.getUser();

        if (fosterCreate.getFirstName() != null) {
            foster.setFirstName(fosterCreate.getFirstName());
        }

        if (fosterCreate.getLastName() != null) {
            foster.setLastName(fosterCreate.getLastName());
        }

        if (fosterCreate.getEmail() != null) {
            if (isUserEmailUnique(fosterCreate.getEmail())) {
                foster.setEmail(fosterCreate.getEmail());
            }
        }

        if (fosterCreate.getUserName() != null) {
            if (isUserNameUnique(fosterCreate.getUserName())) {
                user.setUserName(fosterCreate.getUserName());
            }
        }

        if (fosterCreate.getPassword() != null) {
            user.setPassword(encoder.encode(fosterCreate.getPassword()));
        }

        userRepository.save(user);
        fosterRepository.save(foster);

        return fosterMapper.mapFosterToFosterResponse(foster);
    }

    private boolean areUserDetailsUnique(String userName, String email) {
        return userRepository.findByUserName(userName).isEmpty() && fosterRepository.findByEmail(email).isEmpty();
    }

    private boolean isUserNameUnique(String userName) {
        return userRepository.findByUserName(userName).isEmpty();
    }

    private boolean isUserEmailUnique(String email) {
        return fosterRepository.findByEmail(email).isEmpty();
    }

    private FosterResponse createFoster(String userName, String password, String fistName, String lastName, String email) {
        User user = new User();
        user.setUserName(userName);
        user.setPassword(encoder.encode(password));

        Foster foster = new Foster();
        foster.setFirstName(fistName);
        foster.setLastName(lastName);
        foster.setEmail(email);
        foster.setCreatedAt(Clock.now());
        foster.setUser(user);

        userRepository.save(user);
        fosterRepository.save(foster);

        return fosterMapper.mapFosterToFosterResponse(foster);
    }

    public FosterResponse addWord(Long fosterId, WordCreate wordCreate) {
        if (fosterRepository.findById(fosterId).isEmpty()) {
            throw new UserNotFoundException("User with id: " + fosterId + " not found");
        } else {
            Foster foster = fosterRepository.findById(fosterId).get();
            //List<Category> categoryList = categoryService.updateCategoryList(wordCreate.getCategory());

            //TODO what to do if word is existing
            Word word = new Word();
            word.setPolish(wordCreate.getPolish());
            word.setEnglish(wordCreate.getEnglish());
            //word.setCategoryList(categoryList);
            word.setCreatedAt(Clock.now());

            foster.addWord(word);

            wordService.addWord(word);
            fosterRepository.save(foster);

            return fosterMapper.mapFosterToFosterResponseIncludingSingleWord(foster, word);
        }
    }

    public FosterResponse getAllWordsByFosterId(Long fosterId) {
        Optional<Foster> optionalFoster = fosterRepository.findById(fosterId);

        if (optionalFoster.isEmpty()) {
            throw new UserNotFoundException("User with id: " + fosterId + " not found");
        } else {
            Foster foster = optionalFoster.get();

            return fosterMapper.mapFosterToFosterResponseIncludingAllWords(foster);
        }
    }
}
