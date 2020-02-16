package cloud.cholewa.wow.users.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.IM_USED)
public class UserNameAlreadyExists extends RuntimeException {

    public UserNameAlreadyExists(String message) {
        super(message);
    }
}
