import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TestElementComponent } from './components/test-element/test-element.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TestElementComponent
  },
  {
    path: '1',
    component: ShoppingListComponent
  },
  {
    path: '2',
    component: DashboardComponent, children: [
      {
        // dynamic path parameters via :
        path: ':id/:myVar',
        component: DashboardComponent
      },
      {
        // dynamic path parameters via :
        path: ':id/edit',
        component: DashboardComponent
      },
    ]
  },
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
