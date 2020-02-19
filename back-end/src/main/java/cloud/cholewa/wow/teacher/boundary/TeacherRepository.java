package cloud.cholewa.wow.teacher.boundary;

import cloud.cholewa.wow.teacher.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {

    @Query(value = "SELECT COUNT(*)", nativeQuery = true)
    long countAllUsers();

    Optional<Teacher> findByUserName(String username);
    Optional<Teacher> findById(Long id);
    Optional<Teacher> findByMail(String mail);


}
