package cloud.cholewa.worldofwords.foster.boundary;

import cloud.cholewa.worldofwords.word.boundary.WordResponse;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;

@ToString
@Setter
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FosterResponse {
    private Long id;
    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime lastSeenAt;
    private WordResponse word;
    private List<WordResponse> words;
    private String actionMessage;

    private FosterResponse() {}

    public static final class Builder {
        private Long id;
        private String userName;
        private String firstName;
        private String lastName;
        private String email;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private LocalDateTime lastSeenAt;
        private WordResponse word;
        private List<WordResponse> wordResponseList;
        private String actionMessage;

        public Builder firstName(String firstName) {
            this.firstName = firstName;
            return this;
        }

        public Builder lastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public Builder createdAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public Builder updatedAt(LocalDateTime updatedAt) {
            this.updatedAt = updatedAt;
            return this;
        }

        public Builder lastSeenAt(LocalDateTime lastSeenAt) {
            this.lastSeenAt = lastSeenAt;
            return this;
        }

        public Builder userName(String userName) {
            this.userName = userName;
            return this;
        }

        public Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Builder actionMessage(String actionMessage) {
            this.actionMessage = actionMessage;
            return this;
        }

        public Builder wordResponse(WordResponse wordResponse) {
            this.word = wordResponse;
            return this;
        }

        public Builder wordResponseList(List<WordResponse> wordResponseList) {
            this.wordResponseList = wordResponseList;
            return this;
        }

        public FosterResponse build() {
            FosterResponse fosterResponse = new FosterResponse();
            fosterResponse.firstName = this.firstName;
            fosterResponse.lastName = this.lastName;
            fosterResponse.email = this.email;
            fosterResponse.createdAt = this.createdAt;
            fosterResponse.updatedAt = this.updatedAt;
            fosterResponse.lastSeenAt = this.lastSeenAt;
            fosterResponse.userName = this.userName;
            fosterResponse.id = this.id;
            fosterResponse.actionMessage = this.actionMessage;
            fosterResponse.word = this.word;
            fosterResponse.words = this.wordResponseList;

            return fosterResponse;
        }
    }
}
