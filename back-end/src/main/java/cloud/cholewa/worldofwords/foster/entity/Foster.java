package cloud.cholewa.worldofwords.foster.entity;

import cloud.cholewa.worldofwords.user.entity.User;
import cloud.cholewa.worldofwords.word.entity.Word;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "fosters")
@NoArgsConstructor
@Getter
@Setter
public class Foster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private User user;

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    private String email;

    @NotNull
    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private LocalDateTime lastSeenAt;

    @OneToMany
    @JoinColumn(name = "foster_id")
    private List<Word> wordList;

    public void addWord(Word word) {
        wordList.add(word);
    }
}
