import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeInput') recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  @Input() recipeIndex: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // onSelected() {
  //   // this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
