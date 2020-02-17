package cloud.cholewa.wow.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class UserMailAlreadyExists extends RuntimeException {

    public UserMailAlreadyExists(String message) {
        super(message);
    }
}
