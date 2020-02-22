package cloud.cholewa.wow.users.boundary;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponse {
    private String status;

    public UserResponse() {
        this.status = "authenticated";
    }
}
