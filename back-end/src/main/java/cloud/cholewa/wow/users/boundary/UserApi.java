package cloud.cholewa.wow.users.boundary;

import cloud.cholewa.wow.users.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UserApi {

    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<UserResponse> login(@RequestBody UserAuthenticated userAuthenticated) {
        Long id = userService.findLoggedUserId(userAuthenticated.getUserName());
        return new ResponseEntity<>(new UserResponse(id), HttpStatus.OK);
    }
}
