import { z } from "zod";
import { CategoriesAPIResponseSchema, DrinkAPIResponseSchema, RecipeAPIResponseSchema, RecipesAPIResponseSchema, SearchFilterSchema } from "../utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof RecipesAPIResponseSchema>
export type Drink = z.infer<typeof RecipeAPIResponseSchema>
export type Recipe = z.infer<typeof DrinkAPIResponseSchema>