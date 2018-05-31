import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { TestElementComponent } from './components/test-element/test-element.component';

import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesStartComponent } from './components/recipes/recipes-start/recipes-start.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';


const appRoutes: Routes = [
  {
    path: '', redirectTo: '/recipes', pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipesStartComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent
      },
      {
        path: ':id',
        component: RecipeDetailComponent
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent
      }
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  }

  // {
  //   path: '',
  //   component: TestElementComponent
  // },
  // {
  //   path: '1',
  //   component: ShoppingListComponent
  // },
  // {
  //   path: '2',
  //   component: DashboardComponent, children: [
  //     {
  //       // dynamic path parameters via :
  //       path: ':id/:myVar',
  //       component: DashboardComponent
  //     },
  //     {
  //       // dynamic path parameters via :
  //       path: ':id/edit',
  //       component: DashboardComponent
  //     },
  //   ]
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
