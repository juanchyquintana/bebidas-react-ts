import axios from "axios";
import { CategoriesAPIResponseSchema, RecipesAPIResponseSchema } from "../utils/recipes-schema";
import { SearchFilter } from "../types";

export async function getCategories() {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
  const { data } = await axios(url);

  const result = CategoriesAPIResponseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function getRecipes(filters: SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const { data } = await axios(url)

    const result = RecipesAPIResponseSchema.safeParse(data);
    if(result.success) {
        return result.data
    }
}