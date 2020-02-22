package cloud.cholewa.wow.users.boundary;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UserApi {

    @PostMapping("/login")
    public ResponseEntity<UserResponse> login() {
        return new ResponseEntity<>(new UserResponse(), HttpStatus.OK);
    }
}
