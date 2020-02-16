package cloud.cholewa.wow.users.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.PARTIAL_CONTENT)
public class UserIncompleteData extends Exception {

    public UserIncompleteData(String message) {
        super(message);
    }
}
