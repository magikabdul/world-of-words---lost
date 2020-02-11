package cloud.cholewa.wow.users;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserApi {

    private PasswordEncoder passwordEncoder;
    private UserRepo repo;

    public UserApi(PasswordEncoder passwordEncoder, UserRepo repo) {
        this.passwordEncoder = passwordEncoder;
        this.repo = repo;
    }

    @PostMapping
    public void addUser(@RequestBody User user) {
        repo.save(new User(user.getFirstName(), user.getLastName(), user.getUsername(), passwordEncoder.encode(user.getPassword()), user.getPrivilegeLevel()));
    }

    @GetMapping("/quantity")
    public long getAllUsersQuantity() {
        return repo.countAllUsers();
    }
}
