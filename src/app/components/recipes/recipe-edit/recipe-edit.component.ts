import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';

import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode:boolean = false;
  recipeForm: FormGroup;

  constructor(private activatedRoute:ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params) => {
      this.id = +params.id;
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImagePath = recipe.imagePath;

      if(recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              // 'quantity': new FormControl(ingredient.quantity, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
              'quantity': new FormControl(ingredient.quantity, [Validators.required])
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
        'name': new FormControl(recipeName, Validators.required),
        'description': new FormControl(recipeDescription, Validators.required),
        'imagePath': new FormControl(recipeImagePath, Validators.required),
        'ingredients': recipeIngredients
    })
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      // 'quantity': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      'quantity': new FormControl(null, [Validators.required])
    }));
  }

  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
    );

    if(this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  onDeleteIngredient(index:number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
