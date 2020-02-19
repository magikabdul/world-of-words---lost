package cloud.cholewa.wow.teacher.control;

import cloud.cholewa.wow.configuration.AdminConfiguration;
import cloud.cholewa.wow.configuration.PrivilegeLevel;
import cloud.cholewa.wow.exceptions.UserMailAlreadyExists;
import cloud.cholewa.wow.exceptions.UserNameAlreadyExists;
import cloud.cholewa.wow.exceptions.UserNotFoundException;
import cloud.cholewa.wow.students.control.StudentService;
import cloud.cholewa.wow.students.entity.Student;
import cloud.cholewa.wow.teacher.boundary.TeacherRepository;
import cloud.cholewa.wow.teacher.boundary.TeacherResponse;
import cloud.cholewa.wow.teacher.entity.Teacher;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Set;

@Component
public class TeacherService {

    private final AdminConfiguration adminConfiguration;
    private final PasswordEncoder passwordEncoder;
    private final TeacherRepository teacherRepository;
    private final StudentService studentService;

    public TeacherService(AdminConfiguration adminConfiguration, PasswordEncoder passwordEncoder, TeacherRepository teacherRepository, StudentService studentService) {
        this.adminConfiguration = adminConfiguration;
        this.passwordEncoder = passwordEncoder;
        this.teacherRepository = teacherRepository;
        this.studentService = studentService;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void addDefaultAdmin() {
        if (teacherRepository.findByUserName(adminConfiguration.getUsername().toLowerCase()).isEmpty()) {

            Teacher teacher = new Teacher();
            teacher.setFirstName(adminConfiguration.getFirstName());
            teacher.setLastName(adminConfiguration.getLastName());
            teacher.setUserName(adminConfiguration.getUsername());
            teacher.setMail(adminConfiguration.getMail());
            teacher.setPassword(passwordEncoder.encode(adminConfiguration.getPassword()));
            teacher.setPrivilegeLevel(PrivilegeLevel.ADMIN);
            teacher.setCreatedAt(LocalDateTime.now());

            teacherRepository.save(teacher);
        }
    }

    public void isUserExistingInDatabase(String username) {
        if (teacherRepository.findByUserName(username.toLowerCase()).isPresent()) {
            throw new UserNameAlreadyExists("Username is already used");
        }
    }

    public void isMailExistingInDatabase(String mail) {
        if (teacherRepository.findByMail(mail.toLowerCase()).isPresent()) {
            throw new UserMailAlreadyExists("Mail is already used");
        }
    }

    public TeacherResponse addTeacher(Teacher teacher, PrivilegeLevel privilegeLevel) {
        Teacher newTeacher = new Teacher();
        newTeacher.setFirstName(teacher.getFirstName());
        newTeacher.setLastName(teacher.getLastName());
        newTeacher.setUserName(teacher.getUsername());
        newTeacher.setMail(teacher.getMail());
        newTeacher.setPassword(passwordEncoder.encode(teacher.getPassword()));
        newTeacher.setPrivilegeLevel(privilegeLevel);
        newTeacher.setCreatedAt(LocalDateTime.now());

        teacherRepository.save(newTeacher);
        return mapTeacherToTeacherResponse(newTeacher);
    }

    public TeacherResponse deleteTeacher(Long id) {
        Teacher teacher = teacherRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User doesn't exists"));

        teacherRepository.delete(teacher);
        return mapTeacherToTeacherResponse(teacher);
    }

    public TeacherResponse mapTeacherToTeacherResponse(Teacher teacher) {
        return new TeacherResponse(
                teacher.getFirstName(),
                teacher.getLastName(),
                teacher.getUsername(),
                teacher.getMail(),
                teacher.getCreatedAt().toLocalDate(),
                teacher.getCreatedAt().toLocalTime(),
                teacher.getStudentSet()
        );
    }

    public TeacherResponse addNewStudent(Long id, Student student) {
        studentService.addStudent(student);

        Teacher teacher = teacherRepository.findById(id).orElseThrow();
        Set<Student> studentSet = teacher.getStudentSet();
        studentSet.add(student);
        teacherRepository.save(teacher);

        return mapTeacherToTeacherResponse(teacher);
    }
}
