package cloud.cholewa.wow.users.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.IM_USED)
public class UserMailAlreadyExists extends Exception {

    public UserMailAlreadyExists(String message) {
        super(message);
    }
}
