package com.hauxy.recigpt.recipe;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")

public class RecipeController {
    public record RecipeResponse(String title, String description) {}

    @PostMapping
    public List<RecipeResponse> findRecipes(@RequestBody RecipeRequest request) {
        return List.of(
                new RecipeResponse("Tomato Pasta", "A simple pasta dish using tomato and basic spices."),
                new RecipeResponse("Rice Bowl", "A quick bowl using rice and whatever vegetables you have."),
                new RecipeResponse("Omelette", "A fast egg-based recipe with your available ingredients.")
        );
    }

    public record RecipeRequest(String ingredients) {}
}
