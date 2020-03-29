package cloud.cholewa.worldofwords.core.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class UserNotCreatedException extends RuntimeException {

    public UserNotCreatedException(String message) {
        super(message);
    }
}
