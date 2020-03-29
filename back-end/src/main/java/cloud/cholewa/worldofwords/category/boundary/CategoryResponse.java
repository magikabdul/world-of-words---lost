package cloud.cholewa.worldofwords.category.boundary;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CategoryResponse {
    private Long id;
    private String name;
    private String message;

    private CategoryResponse() {}

    public static final class Builder {
        private Long id;
        private String name;
        private String message;

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Builder message(String message) {
            this.message = message;
            return this;
        }

        public CategoryResponse build() {
            CategoryResponse categoryResponse = new CategoryResponse();
            categoryResponse.name = this.name;
            categoryResponse.id = this.id;
            categoryResponse.message = this.message;

            return categoryResponse;
        }
    }
}
