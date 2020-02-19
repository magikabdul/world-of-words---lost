package cloud.cholewa.wow.teacher.boundary;

import cloud.cholewa.wow.students.entity.Student;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TeacherResponse {
    private String firstName;
    private String lastName;
    private String userName;
    private String mail;
    private LocalDate createdDate;
    private LocalTime createdTime;
    private Set<Student> students;
}
