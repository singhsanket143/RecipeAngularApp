import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) {
  }

  storerecipe() {
    return this.http.put('https://angularrecipebook-af9f6.firebaseio.com/recipe.json', this.recipeService.getRecipes());
  }

  getRecipe() {
    this.http.get('https://angularrecipebook-af9f6.firebaseio.com/recipe.json').subscribe(
      (response: Response) => {
        const recipe: Recipe[] = response.json();
        console.log(recipe);
        this.recipeService.setRecipes(recipe);
      }
    );
  }
}
