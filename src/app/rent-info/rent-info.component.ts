import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rent-info',
  templateUrl: './rent-info.component.html',
  styleUrls: ['./rent-info.component.css']
})
export class RentInfoComponent implements OnInit {

  dummyDisplayData: any;
  searchKey: any;

  constructor(private location: Location) { }

  ngOnInit() {
    // catch Data from HomeComponent
    // if (history.state) {
    //   this.searchKey = history.state;
    //   this.dummyDisplayData = JSON.stringify(this.searchKey);
    // }

    // get Data from History.state using Angular Location
    this.searchKey = this.location.getState();
    // if searchKey length is more than one (with Data)
    if (Object.keys(this.searchKey).length > 1) {
      this.dummyDisplayData = JSON.stringify(this.searchKey);
    } else {                  // if searchKey length is one (because of naviagtion id only exists)
      this.dummyDisplayData = 'Empty';
    }
  }

}
