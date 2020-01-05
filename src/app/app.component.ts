import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../app/common/cart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None         // allow material attribute to redesign
})
export class AppComponent implements OnInit {
  title = 'RealEstate';

  // navigation link for tab_bar
  navLink: any[];
  // index for selected tab_bar
  activeLinkIndex = 0;

  constructor(private router: Router, private globalCart: Cart) {
    // set navigation link
    this.navLink = [
      {
        label: 'Home',
        link: './home',
        index: 0
      }, {
        label: 'Rent Information',
        link: './rentInfo',
        index: 1
      }, {
        label: 'Send Me',
        link: './sendInfo',
        index: 2
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLink.indexOf(this.navLink.find(tab => tab.link === '.' + this.router.url));
    });
    const num = this.globalCart.cart.length;
  }
}
