package cloud.cholewa.worldofwords.word.service;

import cloud.cholewa.worldofwords.word.boundary.WordRepository;
import cloud.cholewa.worldofwords.word.boundary.WordResponse;
import cloud.cholewa.worldofwords.word.entity.Word;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class WordService {

    private WordRepository wordRepository;
    private WordMapper wordMapper;

    public void addWord(Word word) {
        wordRepository.save(word);
    }

    public List<WordResponse> getListOfWordResponse(List<Word> wordList) {
        return wordMapper.mapWordListToWordResponseList(wordList);
    }
}
