package cloud.cholewa.wow.users;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DefaultAdmin {

    public DefaultAdmin(PasswordEncoder passwordEncoder, UserRepo userRepo ) {

        User defaultAdmin = new User(
                "Krzysztof",
                "Cholewa",
                "magikabdul",
                passwordEncoder.encode("123"),
                PrivilegeLevel.ADMIN
        );

        userRepo.save(defaultAdmin);
    }
}
