package cloud.cholewa.wow.users.service;

import cloud.cholewa.wow.students.boundary.StudentRepository;
import cloud.cholewa.wow.students.entity.Student;
import cloud.cholewa.wow.teacher.boundary.TeacherRepository;
import cloud.cholewa.wow.teacher.entity.Teacher;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@AllArgsConstructor
public class UserService {

    private TeacherRepository teacherRepository;
    private StudentRepository studentRepository;


    public Long findLoggedUserId(String userName) {
        Optional<Teacher> teacher = teacherRepository.findByUserName(userName);
        Optional<Student> student = studentRepository.findByUserName(userName);

        if(teacher.isPresent()) {
            return teacher.get().getId();
        }

        if (student.isPresent()) {
            return student.get().getId();
        }

        return 0L;
    }
}
