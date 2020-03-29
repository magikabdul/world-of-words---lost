package cloud.cholewa.worldofwords.word.entity;

import cloud.cholewa.worldofwords.category.entity.Category;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "words")
@NoArgsConstructor
@Setter
@Getter
public class Word {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String polish;
    private String english;

    @NotNull
    private LocalDateTime createdAt;

    private LocalDateTime updateAt;

    @OneToMany
    private Set<Category> categorySet;
}
