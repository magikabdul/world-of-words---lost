package cloud.cholewa.wow.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    @Query(value = "SELECT COUNT(*)", nativeQuery = true)
    long countAllUsers();

    User findByUserName(String username);
}
