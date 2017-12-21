import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'This is a test recipe', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/5/20/0/CCTUL104_Ultimate-Paella_s4x3.jpg.rend.hgtvcom.616.462.suffix/1384541152950.jpeg',[
      new Ingredient('Pasta',10), new Ingredient('Red Chilli',1)
    ]),
    new Recipe('Test Recipe 2', 'This is a test recipe', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',[
      new Ingredient('Fish',3), new Ingredient('Capsicum',5)
    ]),
    new Recipe('Test Recipe 3', 'This is a test recipe', 'http://www.ndtv.com/cooks/images/chicken-chettinad_620.jpg',[
      new Ingredient('Carrot',12), new Ingredient('Sugar',2)
    ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addingIngredients(ingredients);
  }
}
