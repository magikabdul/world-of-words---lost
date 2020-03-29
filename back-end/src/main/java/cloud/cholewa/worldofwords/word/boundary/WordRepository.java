package cloud.cholewa.worldofwords.word.boundary;

import cloud.cholewa.worldofwords.word.entity.Word;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WordRepository extends JpaRepository<Word, Long> {
}
