import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ShoppingListService } from '../../../services/shopping-list.service';

import { Ingredient } from '../../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('quantityInput') quantityInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<{name:string,quantity:number}>();

  editingStartedSubscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f') shoppingListForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editingStartedSubscription = this.shoppingListService.editingStarted.subscribe((index) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(this.editedItemIndex);
      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        quantity: this.editedItem.quantity
      });
    });
  }

  ngOnDestroy() {
    this.editingStartedSubscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    // const ingredientName = this.nameInputRef.nativeElement.value;
    // const ingredientQuantity = this.quantityInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.quantity)

    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      // this.ingredientAdded.emit(newIngredient);
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}
