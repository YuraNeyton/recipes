import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-diets',
    templateUrl: './diets.page.html',
    styleUrls: ['./diets.page.scss'],
})
export class DietsPage implements OnInit {
    diets = [
        {title: 'Стіл №1', img: 'diet1.jpg'},
        {title: 'Стіл №2', img: 'bezglyutenovaya-dieta-preimushhestva-i-riski.jpg'},
        {title: 'Стіл №3', img: 'dieta-dlya-pokhudeniya.jpg'},
        {title: 'Стіл №4', img: 'images.jpg'},
        {title: 'Стіл №5', img: '42169_1_1097.jpg'},
        {title: 'Кето', img: '315_depositphotos_202823666_m_2015.jpg'},
    ]

    constructor() {
    }

    ngOnInit() {
    }

}
