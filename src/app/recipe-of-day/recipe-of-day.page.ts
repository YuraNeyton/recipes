import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-recipe-of-day',
    templateUrl: './recipe-of-day.page.html',
    styleUrls: ['./recipe-of-day.page.scss'],
})
export class RecipeOfDayPage implements OnInit {
    selected = false

    constructor(
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    navigate() {
        this.router.navigate(['tabs', 'recipes'])
    }

    changeIcon() {
        this.selected = !this.selected
    }
}
