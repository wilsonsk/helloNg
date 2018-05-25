import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {  RecipeService } from '../services/recipe.service';

import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {
  recipes: Recipe[] = [];

  // @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeSelected.emit(recipe);
  // }

}
