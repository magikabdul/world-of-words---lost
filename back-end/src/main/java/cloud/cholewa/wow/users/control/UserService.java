package cloud.cholewa.wow.users.control;

import cloud.cholewa.wow.configuration.AdminConfiguration;
import cloud.cholewa.wow.exceptions.UserMailAlreadyExists;
import cloud.cholewa.wow.exceptions.UserNameAlreadyExists;
import cloud.cholewa.wow.exceptions.UserNotFoundException;
import cloud.cholewa.wow.users.boundary.PrivilegeLevel;
import cloud.cholewa.wow.users.boundary.UserRepository;
import cloud.cholewa.wow.users.boundary.UserResponse;
import cloud.cholewa.wow.users.entity.User;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class UserService {

    private final AdminConfiguration adminConfiguration;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    public UserService(AdminConfiguration adminConfiguration, PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.adminConfiguration = adminConfiguration;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void addDefaultAdmin() {
        if (userRepository.findByUserName(adminConfiguration.getUsername().toLowerCase()).isEmpty()) {

            User user = new User();
            user.setFirstName(adminConfiguration.getFirstName());
            user.setLastName(adminConfiguration.getLastName());
            user.setUserName(adminConfiguration.getUsername());
            user.setMail(adminConfiguration.getMail());
            user.setPassword(passwordEncoder.encode(adminConfiguration.getPassword()));
            user.setPrivilegeLevel(PrivilegeLevel.ADMIN);
            user.setCreatedAt(LocalDateTime.now());

            userRepository.save(user);
        }
    }

    public void isUserExistingInDatabase(String username) {
        if (userRepository.findByUserName(username.toLowerCase()).isPresent()) {
            throw new UserNameAlreadyExists("Username is already used");
        }
    }

    public void isMailExistingInDatabase(String mail) {
        if (userRepository.findByMail(mail.toLowerCase()).isPresent()) {
            throw new UserMailAlreadyExists("Mail is already used");
        }
    }

    public UserResponse addUser(User user, PrivilegeLevel privilegeLevel) {
        User newUser = new User();
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setUserName(user.getUsername());
        newUser.setMail(user.getMail());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        newUser.setPrivilegeLevel(privilegeLevel);
        newUser.setCreatedAt(LocalDateTime.now());

        userRepository.save(newUser);
        return mapUserToUserResponse(newUser);
    }

    public UserResponse deleteUser(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User doesn't exists"));

        userRepository.delete(user);
        return mapUserToUserResponse(user);
    }

    public UserResponse mapUserToUserResponse(User user) {
        return new UserResponse(
                user.getFirstName(),
                user.getLastName(),
                user.getUsername(),
                user.getMail(),
                user.getCreatedAt().toLocalDate(),
                user.getCreatedAt().toLocalTime()
        );
    }

}
