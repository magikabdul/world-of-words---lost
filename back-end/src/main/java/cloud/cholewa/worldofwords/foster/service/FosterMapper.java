package cloud.cholewa.worldofwords.foster.service;

import cloud.cholewa.worldofwords.foster.boundary.FosterResponse;
import cloud.cholewa.worldofwords.foster.entity.Foster;
import cloud.cholewa.worldofwords.word.entity.Word;
import cloud.cholewa.worldofwords.word.service.WordMapper;
import cloud.cholewa.worldofwords.word.service.WordService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toList;

@Service
@AllArgsConstructor
public class FosterMapper {

    private WordService wordService;
    private WordMapper wordMapper;

    public List<FosterResponse> mapFosterListToFosterResponse(List<Foster> fosterList) {
        return fosterList.stream()
                .map(this::getFosterResponse)
                .collect(toList());
    }

    public List<FosterResponse> mapFosterListToFosterResponseIncludingWords(List<Foster> fosterList) {
        return fosterList.stream()
                .map(this::getFosterResponseIncludingWords)
                .collect(toList());
    }

    public FosterResponse mapFosterToFosterResponse(Foster foster) {
        return getFosterResponse(foster);
    }

    public FosterResponse mapFosterToFosterResponseIncludingSingleWord(Foster foster, Word word) {
        return getFosterResponseIncludingSingleWord(foster, word);
    }

    public FosterResponse mapFosterToFosterResponseIncludingAllWords(Foster foster) {
        return getFosterResponseIncludingWords(foster);
    }

    private FosterResponse getFosterResponse(Foster foster) {
        return new FosterResponse.Builder()
                .id(foster.getId())
                .userName(foster.getUser().getUsername())
                .firstName(foster.getFirstName())
                .lastName(foster.getLastName())
                .createdAt(foster.getCreatedAt())
                .email(foster.getEmail())
                .build();
    }

    private FosterResponse getFosterResponseIncludingSingleWord(Foster foster, Word word) {
        return new FosterResponse.Builder()
                .id(foster.getId())
                .userName(foster.getUser().getUsername())
                .wordResponse(wordMapper.mapToWordResponse(word))
                .build();
    }

    private FosterResponse getFosterResponseIncludingWords(Foster foster) {
        return new FosterResponse.Builder()
                .id(foster.getId())
                .userName(foster.getUser().getUsername())
                .wordResponseList(wordService.getListOfWordResponse(foster.getAllFosterWords()))
                .build();
    }
}
