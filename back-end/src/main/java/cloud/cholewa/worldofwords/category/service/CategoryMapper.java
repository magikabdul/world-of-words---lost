package cloud.cholewa.worldofwords.category.service;

import cloud.cholewa.worldofwords.category.boundary.CategoryResponse;
import cloud.cholewa.worldofwords.category.entity.Category;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class CategoryMapper {

    public CategoryResponse mapCategoryToCategoryResponse(Category category) {
        return new CategoryResponse.Builder()
                .id(category.getId())
                .name(category.getName())
                .build();
    }

    public List<CategoryResponse> mapCategoryListToCategoryResponseList(List<Category> categoryList) {
        return categoryList
                .stream()
                .map(category ->
                        new CategoryResponse.Builder()
                                .name(category.getName())
                                .build())
                .collect(toList());
    }
}
