package cloud.cholewa.wow.users;

import cloud.cholewa.wow.configuration.AdminConfiguration;
import cloud.cholewa.wow.users.exceptions.UserDoesNotExists;
import cloud.cholewa.wow.users.exceptions.UserIncompleteData;
import cloud.cholewa.wow.users.exceptions.UserMailAlreadyExists;
import cloud.cholewa.wow.users.exceptions.UserNameAlreadyExists;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserApi {

    private AdminConfiguration adminConfiguration;
    private PasswordEncoder passwordEncoder;
    private UserRepo userRepo;
    private UserService userService;

    public UserApi(AdminConfiguration adminConfiguration, PasswordEncoder passwordEncoder, UserRepo userRepo, UserService userService) {
        this.adminConfiguration = adminConfiguration;
        this.passwordEncoder = passwordEncoder;
        this.userRepo = userRepo;
        this.userService = userService;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void addDefaultCredentials() {
        if (userRepo.findByUserName(adminConfiguration.getUsername().toLowerCase()).isEmpty()) {
            userRepo.save(new User(
                    adminConfiguration.getFirstName(),
                    adminConfiguration.getLastName(),
                    adminConfiguration.getUsername(),
                    passwordEncoder.encode(adminConfiguration.getPassword()),
                    adminConfiguration.getMail(),
                    PrivilegeLevel.ADMIN)
            );
        }
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> addUser(@RequestBody User user) throws UserIncompleteData, UserNameAlreadyExists, UserMailAlreadyExists {

        Optional<String> message = userService.areUserDataNotComplete(user);
        if (message.isPresent()) {
            throw new UserIncompleteData(message.get());
        }

        if (userRepo.findByUserName(user.getUsername().toLowerCase()).isPresent()) {
            throw new UserNameAlreadyExists("Username is already used.");
        }

        if (userRepo.findByMail(user.getMail().toLowerCase()).isPresent()) {
            throw new UserMailAlreadyExists("Mail is already used.");
        }

        user.setCreatedAt(LocalDateTime.now());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepo.save(user);
        UserDto userDto = userService.mapUserToUserDto(user);

        return new ResponseEntity<>(userDto, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return "login";
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserDto> findUserById(@PathVariable Long id) throws UserDoesNotExists {
        User user = userRepo.findById(id).orElseThrow(() -> new UserDoesNotExists("User with id: " + id + " doesn't exist in database"));

        return new ResponseEntity<>(getUserDto(user), HttpStatus.OK);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<UserDto> deleteUserById(@PathVariable Long id) throws UserDoesNotExists {
        User user = userRepo.findById(id).orElseThrow(() -> new UserDoesNotExists("User with id: " + id + " doesn't exist in database"));

        userRepo.deleteById(id);

        return new ResponseEntity<>(getUserDto(user), HttpStatus.OK);
    }

    @GetMapping("/quantity")
    public ResponseEntity<Long> getAllUsersQuantity() {
        return new ResponseEntity<>(userRepo.countAllUsers(), HttpStatus.OK);
    }

    private UserDto getUserDto(User user) {
        return new UserDto(
                user.getFirstName(),
                user.getLastName(),
                user.getUsername(),
                user.getMail()
        );
    }
}
