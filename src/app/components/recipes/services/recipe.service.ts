import { Injectable, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('testName', 'testDecr', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
