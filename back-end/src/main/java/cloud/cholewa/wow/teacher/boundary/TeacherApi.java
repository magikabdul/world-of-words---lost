package cloud.cholewa.wow.teacher.boundary;

import cloud.cholewa.wow.configuration.PrivilegeLevel;
import cloud.cholewa.wow.students.entity.Student;
import cloud.cholewa.wow.teacher.control.TeacherService;
import cloud.cholewa.wow.teacher.entity.Teacher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class TeacherApi {

    private final TeacherValidator teacherValidator;
    private final TeacherService teacherService;

    public TeacherApi(TeacherValidator teacherValidator, TeacherService teacherService) {
        this.teacherValidator = teacherValidator;
        this.teacherService = teacherService;
    }

    @PostMapping("/register")
    public ResponseEntity<TeacherResponse> addUser(@RequestBody Teacher teacher) {

        teacherValidator.validateCreateUserData(teacher);
        teacherService.isUserExistingInDatabase(teacher.getUsername());
        teacherService.isMailExistingInDatabase(teacher.getMail());
        TeacherResponse teacherResponse = teacherService.addTeacher(teacher, PrivilegeLevel.MANAGER);

        return new ResponseEntity<>(teacherResponse, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public String login(@RequestBody Teacher teacher) {
        return "login";
    }

    @DeleteMapping("/teacher/{id}")
    public ResponseEntity<TeacherResponse> deleteUser(@PathVariable Long id) {
        TeacherResponse teacherResponse = teacherService.deleteTeacher(id);

        return new ResponseEntity<>(teacherResponse, HttpStatus.OK);
    }

    @PutMapping("/teacher/{id}")
    public ResponseEntity<TeacherResponse> updateUser(@RequestBody Teacher teacher) {
        //TODO
        return new ResponseEntity<>(new TeacherResponse(), HttpStatus.OK);
    }

    @PostMapping("/teacher/{id}/student")
    public ResponseEntity<TeacherResponse> addStudent(@PathVariable Long id, @RequestBody Student student) {
        TeacherResponse teacherResponse = teacherService.addNewStudent(id, student);
        return new ResponseEntity<>(teacherResponse, HttpStatus.OK);
    }




//    @GetMapping("/quantity")
//    public ResponseEntity<Long> getAllUsersQuantity() {
//        return new ResponseEntity<>(userRepo.countAllUsers(), HttpStatus.OK);
//    }


}
