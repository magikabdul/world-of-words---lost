package cloud.cholewa.wow.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
public class UserIncompleteData extends RuntimeException {

    public UserIncompleteData(String message) {
        super(message);
    }
}
