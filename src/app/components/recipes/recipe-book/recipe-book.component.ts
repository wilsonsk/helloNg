import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {  RecipeService } from '../services/recipe.service';

import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  recipesChangedSubscription: Subscription;

  // @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipesChangedSubscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

  ngOnDestroy() {
    this.recipesChangedSubscription.unsubscribe();
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeSelected.emit(recipe);
  // }

}
