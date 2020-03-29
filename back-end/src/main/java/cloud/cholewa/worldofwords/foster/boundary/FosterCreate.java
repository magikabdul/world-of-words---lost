package cloud.cholewa.worldofwords.foster.boundary;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class FosterCreate {
    private String userName;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
}
