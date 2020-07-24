import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeOfDayPage } from './recipe-of-day.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeOfDayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeOfDayPageRoutingModule {}
