package cloud.cholewa.worldofwords.category.boundary;

import cloud.cholewa.worldofwords.category.service.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@AllArgsConstructor
public class CategoryApi {

    private CategoryService categoryService;

    @GetMapping
    public ResponseEntity<List<CategoryResponse>> getAllCategories() {
        return new ResponseEntity<>(categoryService.getAllCategories(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<CategoryResponse> addCategory(@RequestBody CategoryCreate categoryCreate) {
        return new ResponseEntity<>(categoryService.addCategory(categoryCreate), HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<CategoryResponse> updateCategory(@PathVariable Long id, @RequestBody CategoryCreate categoryCreate) {
        return new ResponseEntity<>(categoryService.updateCategory(id, categoryCreate), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<CategoryResponse> deleteCategory(@PathVariable Long id) {
        return new ResponseEntity<>(categoryService.deleteCategory(id), HttpStatus.OK);
    }
}
