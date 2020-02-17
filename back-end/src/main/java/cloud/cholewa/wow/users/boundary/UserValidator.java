package cloud.cholewa.wow.users.boundary;

import cloud.cholewa.wow.exceptions.UserIncompleteData;
import cloud.cholewa.wow.users.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserValidator {

    public void validateCreateUserData(User user) {
        if (user.getFirstName() != null) {
            if (user.getFirstName().length() < 1) {
                throw new UserIncompleteData("First name incorrect");
            }
        } else {
            throw new UserIncompleteData("First name field is missing");
        }

        if (user.getLastName() != null) {
            if (user.getLastName().length() < 1) {
                throw new UserIncompleteData("Last name incorrect");
            }
        } else {
            throw new UserIncompleteData("Last name field is missing");
        }

        if (user.getUsername() != null) {
            if (user.getUsername().length() < 1) {
                throw new UserIncompleteData("User name incorrect");
            }
        } else {
            throw new UserIncompleteData("User name field is missing");
        }

        if (user.getPassword() != null) {
            if (user.getPassword().length() < 8) {
                throw new UserIncompleteData("Password incorrect or too short");
            }
        } else {
            throw new UserIncompleteData("Password field is missing");
        }

        if (user.getMail() != null) {
            if (user.getMail().length() < 1) {
                throw new UserIncompleteData("Mail address incorrect");
            }
        } else {
            throw new UserIncompleteData("Mail field is missing");
        }

    }
}
