package com.hauxy.recigpt.recipe;

import com.hauxy.recigpt.recipe.dto.SpoonacularRecipeDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.Arrays;
import java.util.List;

@Service
public class SpoonacularService {

    @Value("${spoonacular.api.key}")
    private String apiKey;

    private final RestClient restClient = RestClient.create("https://api.spoonacular.com");

    public List<SpoonacularRecipeDTO> findRecipesByIngredients(String ingredients) {
        SpoonacularRecipeDTO[] response = restClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/recipes/findByIngredients")
                        .queryParam("ingredients", ingredients)
                        .queryParam("number", 3)
                        .queryParam("apiKey", apiKey)
                        .build()
                )
                .retrieve()
                .body(SpoonacularRecipeDTO[].class);

        return Arrays.asList(response);
    }
}
