import {Component, OnInit} from '@angular/core';
import {Slide} from "../../models";
import {Router} from "@angular/router";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
    allRecipes: Slide[] = [
        {title: 'Дивитися всі рецепти', description: 'Огірок', img: 'cucumber.jpg'},
        {title: 'Дивитися всі рецепти', description: 'Пиріг з кабачків', img: 'zucchini_pie.jpg'},
        {title: 'Дивитися всі рецепти', description: 'Курине філе відварене', img: 'kurka.jpg'},
    ]
    menu = [
        {title: 'Новинки', img: 'shutterstock.jpg', link: ''},
        {title: 'Рецепт дня', img: 'avocado.jpg', link: 'recipe-of-day'},
        {title: 'Конструктор', img: 'colorful.jpg', link: ''},
        {title: 'Вибране', img: 'selected.jpg', link: ''}
    ]

    constructor(
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    navigate(link: string) {
        this.router.navigate([link]);
    }
}
