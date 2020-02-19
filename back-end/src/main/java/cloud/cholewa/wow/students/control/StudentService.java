package cloud.cholewa.wow.students.control;

import cloud.cholewa.wow.students.boundary.StudentRepository;
import cloud.cholewa.wow.students.entity.Student;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    private StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public void addStudent(Student student) {
        studentRepository.save(student);
    }
}
