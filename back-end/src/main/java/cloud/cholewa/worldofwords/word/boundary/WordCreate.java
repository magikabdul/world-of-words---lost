package cloud.cholewa.worldofwords.word.boundary;

import cloud.cholewa.worldofwords.category.boundary.CategoryCreate;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Setter
@Getter
public class WordCreate {
    private String polish;
    private String english;
    private List<CategoryCreate> category;
}
