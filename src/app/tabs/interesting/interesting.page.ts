import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-interesting',
    templateUrl: './interesting.page.html',
    styleUrls: ['./interesting.page.scss'],
})
export class InterestingPage implements OnInit {
    interests = [
        {title: 'Як швидко похудати', img: 'sxydnytu.jpg'},
        {title: 'Що таке омега-3?', img: '1-7.jpg'},
        {title: 'Марафон "7 днів"', img: 'fat-burning-foods.jpg'},
        {title: 'Глютен - міф чи правда?', img: 'demo.jpg'},
        {title: 'Користь нута', img: 'korisni_vlastivosti.jpg'},
    ]

    constructor() {
    }

    ngOnInit() {
    }

}
