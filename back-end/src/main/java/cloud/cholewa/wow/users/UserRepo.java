package cloud.cholewa.wow.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    @Query(value = "SELECT COUNT(*)", nativeQuery = true)
    long countAllUsers();

    Optional<User> findByUserName(String username);
    Optional<User> findById(Long id);
    Optional<User> findByMail(String mail);


}
