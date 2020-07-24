import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoSliderComponent} from "./info-slider/info-slider.component";
import {IonicModule} from "@ionic/angular";
import {MenuListComponent} from "./menu-list/menu-list.component";


@NgModule({
    declarations: [
        InfoSliderComponent,
        MenuListComponent
    ],
    exports: [
        InfoSliderComponent,
        MenuListComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
})
export class SharedModule {
}
