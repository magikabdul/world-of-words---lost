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

import static java.util.stream.Collectors.toList;

@Service
@AllArgsConstructor
public class CategoryService {

    private CategoryRepository categoryRepository;
    private CategoryMapper categoryMapper;

    public List<CategoryResponse> getAllCategories() {
        return categoryMapper.mapCategoryListToCategoryResponseList(categoryRepository.findAll());
    }

    public CategoryResponse addCategory(CategoryCreate categoryCreate) {
        if (categoryRepository.findByName(categoryCreate.getName()).isPresent()) {
            throw new CategoryNotCreatedException("Category already exists");
        } else {
            Category category = new Category();
            category.setName(categoryCreate.getName());

            categoryRepository.save(category);

            return categoryMapper.mapCategoryToCategoryResponse(category);
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

                return categoryMapper.mapCategoryToCategoryResponse(category);
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

            return categoryMapper.mapCategoryToCategoryResponse(category);
        }
    }

    public List<Category> updateCategoryList(List<CategoryCreate> categoryCreateList) {
        return categoryCreateList.stream()
                .map(categoryCreate -> {
                    if (categoryRepository.findByName(categoryCreate.getName()).isEmpty()) {
                        Category category = new Category();
                        category.setName(categoryCreate.getName());
                        categoryRepository.save(category);
                    }

                    return categoryRepository.findByName(categoryCreate.getName()).get();
                })
                .collect(toList());
    }
}
