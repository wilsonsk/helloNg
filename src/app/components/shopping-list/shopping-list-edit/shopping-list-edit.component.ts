import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import { ShoppingListService } from '../../../services/shopping-list.service';

import { Ingredient } from '../../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('quantityInput') quantityInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<{name:string,quantity:number}>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientQuantity = this.quantityInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientQuantity)
    // this.ingredientAdded.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
