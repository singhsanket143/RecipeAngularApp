import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) {
  }

  storerecipe() {
    return this.http.put('https://angularrecipebook-af9f6.firebaseio.com/recipe.json', this.recipeService.getRecipes());
  }

  getRecipe() {
    this.http.get('https://angularrecipebook-af9f6.firebaseio.com/recipe.json').map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];

          }
        }
        return recipes;
      }
    ).subscribe(
      (recipe: Recipe[]) => {
        this.recipeService.setRecipes(recipe);
      }
    );
  }
}
