package cloud.cholewa.wow.users.boundary;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class UserAuthenticated {
    private String userName;
}
