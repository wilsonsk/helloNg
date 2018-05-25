import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Services
import { TestService } from './services/test.service';
import { ShoppingListService } from './services/shopping-list.service';

// Directives
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { GoodPracticeHighlightDirective } from './directives/good-practice-highlight.directive';
import { TestStructuralDirective } from './directives/test-structural.directive';

// Components
import { AppComponent } from './app.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeBookComponent } from './components/recipes/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipes/recipe-book/recipe-item/recipe-item.component';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TestElementComponent } from './components/test-element/test-element.component';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    HeaderComponent,
    RecipeBookComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListEditComponent,
    DashboardComponent,
    TestElementComponent,
    BasicHighlightDirective,
    GoodPracticeHighlightDirective,
    TestStructuralDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TestService,
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
