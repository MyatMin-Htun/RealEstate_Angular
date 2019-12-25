import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None         // to change Tab menu color and active link color
})
export class AppComponent implements OnInit {
  title = 'RealEstate';

  // navigation link for tab_bar
  navLink: any[];
  // index for selected tab_bar
  activeLinkIndex = 0;

  constructor(private router: Router) {
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
  }
}
