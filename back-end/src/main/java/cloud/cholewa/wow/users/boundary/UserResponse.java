package cloud.cholewa.wow.users.boundary;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponse {
    private String status;
    private Long id;

    public UserResponse(Long id) {
        this.id = id;
        this.status = "authenticated";
    }
}
