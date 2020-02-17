package cloud.cholewa.wow.users.boundary;

import cloud.cholewa.wow.users.control.UserService;
import cloud.cholewa.wow.users.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserApi {

    private final UserValidator userValidator;
    private final UserService userService;

    public UserApi(UserValidator userValidator, UserService userService) {
        this.userValidator = userValidator;
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponse> addUser(@RequestBody User user) {

        userValidator.validateCreateUserData(user);
        userService.isUserExistingInDatabase(user.getUsername());
        userService.isMailExistingInDatabase(user.getMail());
        UserResponse userResponse = userService.addUser(user, PrivilegeLevel.MANAGER);

        return new ResponseEntity<>(userResponse, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return "login";
    }

    @DeleteMapping("users/{id}")
    public ResponseEntity<UserResponse> deleteUser(@PathVariable Long id) {
        UserResponse userResponse = userService.deleteUser(id);

        return new ResponseEntity<>(userResponse, HttpStatus.OK);
    }

//    @GetMapping("/users/{id}")
//    public ResponseEntity<UserResponse> findUserById(@PathVariable Long id) throws UserDoesNotExists {
//        User user = userRepo.findById(id).orElseThrow(() -> new UserDoesNotExists("User with id: " + id + " doesn't exist in database"));
//
//        return new ResponseEntity<>(getUserDto(user), HttpStatus.OK);
//    }



//    @GetMapping("/quantity")
//    public ResponseEntity<Long> getAllUsersQuantity() {
//        return new ResponseEntity<>(userRepo.countAllUsers(), HttpStatus.OK);
//    }


}
