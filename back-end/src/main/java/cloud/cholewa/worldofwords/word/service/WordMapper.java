package cloud.cholewa.worldofwords.word.service;

import cloud.cholewa.worldofwords.word.boundary.WordResponse;
import cloud.cholewa.worldofwords.word.entity.Word;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WordMapper {

    public WordResponse mapToWordResponse(Word word) {
        return new WordResponse.Builder()
                .id(word.getId())
                .polish(word.getPolish())
                .english(word.getEnglish())
                .build();
    }

    public List<WordResponse> mapWordListToWordResponseList(List<Word> wordList) {
        return wordList
                .stream()
                .map(word -> new WordResponse.Builder()
                        .id(word.getId())
                        .polish(word.getPolish())
                        .english(word.getEnglish())
                        .build())
                .collect(Collectors.toList());
    }
}
