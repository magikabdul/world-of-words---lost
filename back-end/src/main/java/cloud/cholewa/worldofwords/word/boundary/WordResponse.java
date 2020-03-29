package cloud.cholewa.worldofwords.word.boundary;

import cloud.cholewa.worldofwords.category.boundary.CategoryResponse;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Set;

@Setter
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class WordResponse {
    private Long id;
    private String polish;
    private String english;
    private LocalDateTime createdAt;
    private Set<CategoryResponse> categories;

    public static class Builder {
        private Long id;
        private String polish;
        private String english;
        private LocalDateTime createdAt;
        private Set<CategoryResponse> categories;

        public Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Builder polish(String polish) {
            this.polish = polish;
            return this;
        }

        public Builder english(String english) {
            this.english = english;
            return this;
        }

        public Builder createdAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public Builder categories(Set<CategoryResponse> categoryResponseSet) {
            this.categories = categoryResponseSet;
            return this;
        }

        public WordResponse build() {
            WordResponse wordResponse = new WordResponse();
            wordResponse.id = this.id;
            wordResponse.polish = this.polish;
            wordResponse.english = this.english;
            wordResponse.createdAt = this.createdAt;
            wordResponse.categories = this.categories;

            return wordResponse;
        }
    }
}
