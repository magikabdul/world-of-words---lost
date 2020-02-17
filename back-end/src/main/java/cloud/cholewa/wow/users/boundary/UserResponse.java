package cloud.cholewa.wow.users.boundary;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@AllArgsConstructor
@Getter
@Setter
public class UserResponse {
    private String firstName;
    private String lastName;
    private String userName;
    private String mail;
    private LocalDate createdDate;
    private LocalTime createdTime;
}
