import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  id: number;
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }

  onEditRecipe() {
    // this.router.navigate(['edit'], { relativeTo: this.activatedRoute })
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.activatedRoute })
  }

  onAddToShoppingList() {
    // this.recipeService.addToShoppingList(this.recipe.ingredients);
  }

}
