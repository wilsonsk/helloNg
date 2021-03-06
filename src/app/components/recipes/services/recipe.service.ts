import { Injectable, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ShoppingListService } from '../../../services/shopping-list.service';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../../../models/ingredient.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('testName', 'testDecr', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', []),
    new Recipe('paleo hash', 'low glycemic, protein rich dish', 'http://paleoaholic.com/wp-content/uploads/2013/07/kalehash.jpg', [
      new Ingredient('sweet potatos', '3'),
      new Ingredient('ground chicken sausage', '1.5lbs'),
      new Ingredient('shredded cabage', '1 bag')
    ])
  ];

  recipesChanged = new Subject<Recipe[]>();

  // @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id:number): Recipe {
    return this.recipes[id];
  }

  addRecipe(recipe:Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number) {
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
