import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

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
import { RecipesStartComponent } from './components/recipes/recipes-start/recipes-start.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';

// const appRoutes: Routes = [
//   {
//     path: '',
//     component: TestElementComponent
//   },
//   {
//     path: '1',
//     component: ShoppingListComponent
//   },
//   {
//     path: '2',
//     component: DashboardComponent, children: [
//       {
//         // dynamic path parameters via :
//         path: ':id/:myVar',
//         component: DashboardComponent
//       },
//       {
//         // dynamic path parameters via :
//         path: ':id/edit',
//         component: DashboardComponent
//       },
//     ]
//   },
// ];

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
    DropdownDirective,
    RecipesStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes)
    AppRoutingModule
  ],
  providers: [
    TestService,
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
