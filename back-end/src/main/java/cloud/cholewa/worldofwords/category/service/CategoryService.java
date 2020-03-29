package cloud.cholewa.worldofwords.category.service;

import cloud.cholewa.worldofwords.category.boundary.CategoryCreate;
import cloud.cholewa.worldofwords.category.boundary.CategoryRepository;
import cloud.cholewa.worldofwords.category.boundary.CategoryResponse;
import cloud.cholewa.worldofwords.category.entity.Category;
import cloud.cholewa.worldofwords.core.exceptions.CategoryNotCreatedException;
import cloud.cholewa.worldofwords.core.exceptions.CategoryNotFound;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CategoryService {

    private CategoryRepository categoryRepository;

    public List<CategoryResponse> getAllCategories() {
        return categoryRepository.findAll()
                .stream()
                .map(category -> new CategoryResponse.Builder()
                        .id(category.getId())
                        .name(category.getName())
                        .build())
                .collect(Collectors.toList());
    }

    public CategoryResponse addCategory(CategoryCreate categoryCreate) {
        if (categoryRepository.findByName(categoryCreate.getName()).isPresent()) {
            throw new CategoryNotCreatedException("Category already exists");
        } else {
            Category category = new Category();
            category.setName(categoryCreate.getName());

            categoryRepository.save(category);

            return new CategoryResponse.Builder()
                    .name(category.getName())
                    .message("created")
                    .build();
        }
    }

    public CategoryResponse updateCategory(Long id, CategoryCreate categoryCreate) {
        Optional<Category> optionalCategory = categoryRepository.findById(id);

        if (optionalCategory.isEmpty()) {
            throw new CategoryNotFound("Category with id: " + id + " not found");
        } else {
            Category category = optionalCategory.get();

            if (categoryRepository.findByName(categoryCreate.getName()).isPresent()) {
                throw new CategoryNotCreatedException("Can't update category. Category name already exists");
            } else {
                category.setName(categoryCreate.getName());

                categoryRepository.save(category);

                return new CategoryResponse.Builder()
                        .id(category.getId())
                        .name(category.getName())
                        .message("updated")
                        .build();
            }
        }
    }

    public CategoryResponse deleteCategory(Long id) {
        Optional<Category> optionalCategory = categoryRepository.findById(id);

        if (optionalCategory.isEmpty()) {
            throw new CategoryNotFound("Category with id: " + id + " not found");
        } else {
            Category category = optionalCategory.get();
            categoryRepository.delete(category);

            return new CategoryResponse.Builder()
                    .id(category.getId())
                    .name(category.getName())
                    .message("deleted")
                    .build();
        }
    }

    public Set<Category> updateCategoriesSet(Set<CategoryCreate> categoryCreateSet) {
        Set<Category> categories = categoryCreateSet.stream()
                .map(categoryCreate -> {
                    if (categoryRepository.findByName(categoryCreate.getName()).isEmpty()) {
                        Category category = new Category();
                        category.setName(categoryCreate.getName());
                        categoryRepository.save(category);
                    }

                    return categoryRepository.findByName(categoryCreate.getName()).get();
                })
                .collect(Collectors.toSet());

        return categories;
    }
}
