package cloud.cholewa.worldofwords.core.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class CategoryNotCreatedException extends RuntimeException {
    public CategoryNotCreatedException(String message) {
        super(message);
    }
}
