import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterestingPageRoutingModule } from './interesting-routing.module';

import { InterestingPage } from './interesting.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InterestingPageRoutingModule,
        SharedModule
    ],
  declarations: [InterestingPage]
})
export class InterestingPageModule {}
