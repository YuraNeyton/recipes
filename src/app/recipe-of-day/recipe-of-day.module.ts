import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeOfDayPageRoutingModule } from './recipe-of-day-routing.module';

import { RecipeOfDayPage } from './recipe-of-day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeOfDayPageRoutingModule
  ],
  declarations: [RecipeOfDayPage]
})
export class RecipeOfDayPageModule {}
