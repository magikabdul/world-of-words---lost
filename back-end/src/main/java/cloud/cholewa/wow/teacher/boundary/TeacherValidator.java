package cloud.cholewa.wow.teacher.boundary;

import cloud.cholewa.wow.exceptions.UserIncompleteData;
import cloud.cholewa.wow.teacher.entity.Teacher;
import org.springframework.stereotype.Component;

@Component
public class TeacherValidator {

    public void validateCreateTeacherData(Teacher teacher) {
        if (teacher.getFirstName() != null) {
            if (teacher.getFirstName().length() < 1) {
                throw new UserIncompleteData("First name incorrect");
            }
        } else {
            throw new UserIncompleteData("First name field is missing");
        }

        if (teacher.getLastName() != null) {
            if (teacher.getLastName().length() < 1) {
                throw new UserIncompleteData("Last name incorrect");
            }
        } else {
            throw new UserIncompleteData("Last name field is missing");
        }

        if (teacher.getUsername() != null) {
            if (teacher.getUsername().length() < 1) {
                throw new UserIncompleteData("User name incorrect");
            }
        } else {
            throw new UserIncompleteData("User name field is missing");
        }

        if (teacher.getPassword() != null) {
            if (teacher.getPassword().length() < 8) {
                throw new UserIncompleteData("Password incorrect or too short");
            }
        } else {
            throw new UserIncompleteData("Password field is missing");
        }

        if (teacher.getMail() != null) {
            if (teacher.getMail().length() < 1) {
                throw new UserIncompleteData("Mail address incorrect");
            }
        } else {
            throw new UserIncompleteData("Mail field is missing");
        }
    }
}
