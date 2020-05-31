package cloud.cholewa.worldofwords.foster.boundary;

import cloud.cholewa.worldofwords.foster.service.FosterService;
import cloud.cholewa.worldofwords.word.boundary.WordCreate;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/fosters")
public class FosterApi {

    private final FosterService fosterService;

    @GetMapping("/{id}")
    public ResponseEntity<FosterResponse> getFosterById(@PathVariable Long id) {
        return new ResponseEntity<>(fosterService.getById(id), HttpStatus.FOUND);
    }

    @GetMapping
    public ResponseEntity<List<FosterResponse>> getAllFosters() {
        return new ResponseEntity<>(fosterService.getAllFosters(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<FosterResponse> addFoster(@RequestBody FosterCreate fosterCreate) {
        return new ResponseEntity<>(fosterService.addFoster(fosterCreate), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<FosterResponse> deleteFoster(@PathVariable Long id) {
        return new ResponseEntity<>(fosterService.deleteFoster(id), HttpStatus.ACCEPTED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<FosterResponse> updateFoster(@PathVariable Long id, @RequestBody FosterCreate fosterCreate) {
        return new ResponseEntity<>(fosterService.updateFoster(id, fosterCreate), HttpStatus.OK);
    }


    @PostMapping("/{fosterId}/words")
    public ResponseEntity<FosterResponse> addWord(@PathVariable Long fosterId, @RequestBody WordCreate wordCreate) {
        return new ResponseEntity<>(fosterService.addWord(fosterId, wordCreate), HttpStatus.CREATED);
    }

    @GetMapping("/{fosterId}/words")
    public ResponseEntity<FosterResponse> getAllWordsByFosterId(@PathVariable Long fosterId) {
        return new ResponseEntity<>(fosterService.getAllWordsByFosterId(fosterId), HttpStatus.OK);
    }
}
