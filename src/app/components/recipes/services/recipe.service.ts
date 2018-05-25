import { Injectable, EventEmitter, Output } from '@angular/core';

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

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
