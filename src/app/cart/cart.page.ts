import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(
      private router: Router,
      private menu: MenuController
  ) { }

  ngOnInit() {
    this.menu.close('side_menu');
  }
  navigate() {
    this.router.navigate(['tabs', 'recipes'])
  }
}
