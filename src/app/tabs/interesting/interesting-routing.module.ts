import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterestingPage } from './interesting.page';

const routes: Routes = [
  {
    path: '',
    component: InterestingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterestingPageRoutingModule {}
