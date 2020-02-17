package cloud.cholewa.wow.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class UserNameAlreadyExists extends RuntimeException {

    public UserNameAlreadyExists(String message) {
        super(message);
    }
}
