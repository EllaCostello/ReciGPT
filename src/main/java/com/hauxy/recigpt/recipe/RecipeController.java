package com.hauxy.recigpt.recipe;

import com.hauxy.recigpt.recipe.dto.SpoonacularRecipeDTO;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")

public class RecipeController {
    public record RecipeResponse(String title, String description) {}

    private final SpoonacularService spoonacularService;

    public RecipeController(SpoonacularService spoonacularService) {
        this.spoonacularService = spoonacularService;
    }

    @PostMapping
    public List<SpoonacularRecipeDTO> findRecipes(@RequestBody RecipeRequest request) {
        return spoonacularService.findRecipesByIngredients(request.ingredients());
    }

    public record RecipeRequest(String ingredients) {}
}
