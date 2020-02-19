package cloud.cholewa.wow.teacher.control;

import cloud.cholewa.wow.configuration.AdminConfiguration;
import cloud.cholewa.wow.configuration.PrivilegeLevel;
import cloud.cholewa.wow.exceptions.UserMailAlreadyExists;
import cloud.cholewa.wow.exceptions.UserNameAlreadyExists;
import cloud.cholewa.wow.exceptions.UserNotFoundException;
import cloud.cholewa.wow.teacher.boundary.TeacherRepository;
import cloud.cholewa.wow.teacher.boundary.TeacherResponse;
import cloud.cholewa.wow.teacher.entity.Teacher;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class TeacherService {

    private final AdminConfiguration adminConfiguration;
    private final PasswordEncoder passwordEncoder;
    private final TeacherRepository teacherRepository;

    public TeacherService(AdminConfiguration adminConfiguration, PasswordEncoder passwordEncoder, TeacherRepository teacherRepository) {
        this.adminConfiguration = adminConfiguration;
        this.passwordEncoder = passwordEncoder;
        this.teacherRepository = teacherRepository;
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

    public TeacherResponse addUser(Teacher teacher, PrivilegeLevel privilegeLevel) {
        Teacher newTeacher = new Teacher();
        newTeacher.setFirstName(teacher.getFirstName());
        newTeacher.setLastName(teacher.getLastName());
        newTeacher.setUserName(teacher.getUsername());
        newTeacher.setMail(teacher.getMail());
        newTeacher.setPassword(passwordEncoder.encode(teacher.getPassword()));
        newTeacher.setPrivilegeLevel(privilegeLevel);
        newTeacher.setCreatedAt(LocalDateTime.now());

        teacherRepository.save(newTeacher);
        return mapUserToUserResponse(newTeacher);
    }

    public TeacherResponse deleteUser(Long id) {
        Teacher teacher = teacherRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User doesn't exists"));

        teacherRepository.delete(teacher);
        return mapUserToUserResponse(teacher);
    }

    public TeacherResponse mapUserToUserResponse(Teacher teacher) {
        return new TeacherResponse(
                teacher.getFirstName(),
                teacher.getLastName(),
                teacher.getUsername(),
                teacher.getMail(),
                teacher.getCreatedAt().toLocalDate(),
                teacher.getCreatedAt().toLocalTime()
        );
    }

}
