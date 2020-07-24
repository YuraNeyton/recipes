import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    menuList = [
        {title: 'Головна', icon: 'home-outline'},
        {title: 'Всі рецепти', icon: 'list-outline'},
        {title: 'Вибране', icon: 'heart-outline'},
        {title: 'Список покупок', icon: 'cart-outline'},
        {title: 'Підписатися на новинки', icon: 'megaphone-outline'},
        {title: 'Оцінити', icon: 'star-outline'},
        {title: 'Розказати другу', icon: 'share-social-outline'},
        {title: 'політика конфід-ті', icon: 'document-outline'},
        {title: 'Більше рецептів?', icon: 'download-outline'},
    ]
    socials = [
        // {img: 'logo-computer-icons-clip-art-instagram-layout.jpg'},
        {img: '1200px-Facebook_F_icon.svg.png'},
    ]

    constructor() {
    }

    ngOnInit() {
    }

}
