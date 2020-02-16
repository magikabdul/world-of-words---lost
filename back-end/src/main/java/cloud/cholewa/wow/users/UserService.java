package cloud.cholewa.wow.users;

import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserService {

    public Optional<String> areUserDataNotComplete(User user) {

        if (user.getFirstName() != null) {
            if (user.getFirstName().length() < 1) {
                return Optional.of("First name incorrect");
            }
        } else {
            return Optional.of("First name field is missing");
        }

        if (user.getLastName() != null) {
            if (user.getLastName().length() < 1) {
                return Optional.of("Last name incorrect");
            }
        } else {
            return Optional.of("Last name field is missing");
        }

        if (user.getUsername() != null) {
            if (user.getUsername().length() < 1) {
                return Optional.of("User name incorrect");
            }
        } else {
            return Optional.of("User name field is missing");
        }

        if (user.getPassword() != null) {
            if (user.getPassword().length() < 8) {
                return Optional.of("Password incorrect or too short");
            }
        } else {
            return Optional.of("Password field is missing");
        }

        if (user.getMail() != null) {
            if (user.getMail().length() < 1) {
                return Optional.of("Mail address incorrect");
            }
        } else {
            return Optional.of("Mail field is missing");
        }

        return Optional.empty();
    }

    public UserDto mapUserToUserDto(User user) {
        return new UserDto(
                user.getFirstName(),
                user.getLastName(),
                user.getUsername(),
                user.getMail()
        );
    }
}
