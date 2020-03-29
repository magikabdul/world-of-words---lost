package cloud.cholewa.worldofwords.foster.boundary;

import cloud.cholewa.worldofwords.foster.entity.Foster;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FosterRepository extends JpaRepository<Foster, Long> {

    Optional<Foster> findByEmail(String email);

    Optional<Foster> findById(Long id);
}
