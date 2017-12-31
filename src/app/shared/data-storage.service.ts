import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) {
  }

  storerecipe() {
    return this.http.put('https://angularrecipebook-af9f6.firebaseio.com/recipe.json', this.recipeService.getRecipes());
  }
}
