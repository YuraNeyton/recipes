import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.page.html',
    styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
    categories = [
        {title: 'Сніданок', img: 'snidanok.jpg'},
        {title: 'Перекус ранковий', img: 'veg-diet.jpg'},
        {title: 'Обід', img: 'lebanese_food.jpg'},
        {title: 'Перекус вечірній', img: 'perekys_veshirniy.jpg'},
        {title: 'Вечеря', img: '1554900550_recepty-poleznyh-blyud-iz-kuricy.jpg'},
        {title: 'Низьковуглеводні', img: 'Nizkouglevodnie_producti.jpg'},
    ]

    constructor() {
    }

    ngOnInit() {
    }

}
