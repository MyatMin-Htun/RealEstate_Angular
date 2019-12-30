import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { SearchField } from './searchField.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None         // allow material attribute to redesign
})

export class HomeComponent implements OnInit {

  @ViewChild('txtPriceInput', { static: false }) txtPriceInput: ElementRef;

  errorMessage: string;
  txtKey: string;
  txtPrice: string;
  txtCity: string;
  txtTownship: string;
  txtCountry: string;
  displayMore = { icon: 'add', value: 'Show More Field' };
  panelSearchMoreField = false;
  // additional field data for search form
  moreField = [
    { icon: 'add', value: 'air-condition', select: false },
    { icon: 'add', value: 'wifi', select: false },
    { icon: 'add', value: 'pool', select: false },
    { icon: 'add', value: 'lift', select: false },
    { icon: 'add', value: 'sea-view', select: false }];
  choseField: string[] = [];                  // chosen field data from search form
  searchKey: SearchField;

  constructor(private router: Router) {
    this.searchKey = new SearchField();
  }

  ngOnInit() {
  }

  // check [price] is a valid price or not - method
  validatePrice(): boolean {
    if (this.txtPrice) {
      if (+this.txtPrice < 0) {
        this.errorMessage = '*Invalid price';
        // focus cursor on [[txtPriceInput]]
        this.txtPriceInput.nativeElement.focus();

        return false;
      }
      return true;
    }
    return true;
  }

  // display more field - method
  displayMoreField(): void {
    // check Display [icon] and change [icon] and [value]
    if (this.displayMore.icon === 'add') {
      // change the [value] and [icon]
      this.displayMore.icon = 'remove';
      this.displayMore.value = 'Hide the Fields';
    } else {
      this.displayMore.icon = 'add';
      this.displayMore.value = 'Show More Field';
    }
    // change boolean to display more field for search panel
    this.panelSearchMoreField = !this.panelSearchMoreField;
  }

  // search rent information - method
  searchRentInfo(): void {
    // check if Price is valid
    if (this.validatePrice()) {
      // if valid, clear the Error Message
      this.errorMessage = '';

      // add data to search Key for searching rent information
      // addKeyValue([value], [key])
      this.addKeyValue(this.txtKey, 'keyword');
      this.addKeyValue(this.txtPrice, 'price');
      this.addKeyValue(this.txtCity, 'city');
      this.addKeyValue(this.txtTownship, 'township');
      this.addKeyValue(this.txtCountry, 'country');
      this.addKeyValue(this.choseField, 'choseField');

      console.log(this.searchKey);
      // navigate to rent-info with Data
      this.router.navigateByUrl('/rentInfo', { state: this.searchKey });
    }
  }

  // add selected additional field - method
  addSelected(selectedData: any) {
    // change the mat chip icon to select/unselect
    if (selectedData.selected) {
      selectedData.icon = 'add';
    } else {
      selectedData.icon = 'done';
    }
    // change the mat chip style to select/unselect
    selectedData.selected = !selectedData.selected;

    // if there is no data in [choseField]
    if (!this.choseField.length) {
      // add chosen field value to [choseField]
      this.choseField.push(selectedData.value);
    } else {
      // find if chosen field value exists in [choseField]
      const index: number = this.choseField.indexOf(selectedData.value);
      // if exists
      if (index !== -1) {
        // discard item from [choseField]
        this.choseField.splice(index, 1);
      } else {
        // else, add item to [choseField]
        this.choseField.push(selectedData.value);
      }
    }

    console.log(this.choseField);
  }

  addKeyValue(value: any, key: string) {
    // if value is inputted
    if (value) {
      // check key, and Add value
      switch (key) {
        // if key is keyword
        case 'keyword': this.searchKey.keyword = value; break;
        // if key is price
        case 'price': this.searchKey.price = +value; break;
        // if key is city
        case 'city': this.searchKey.city = value; break;
        // if key is township
        case 'township': this.searchKey.township = value; break;
        // if key is country
        case 'country': this.searchKey.country = value; break;
        // if key is moreField
        case 'choseField': this.searchKey.fieldValue = value; break;
      }
    } else {      // if no value is inputted
      // check key, and Add null value
      switch (key) {
        // if key is keyword
        case 'keyword': this.searchKey.keyword = null; break;
        // if key is price
        case 'price': this.searchKey.price = 0; break;
        // if key is city
        case 'city': this.searchKey.city = null; break;
        // if key is township
        case 'township': this.searchKey.township = null; break;
        // if key is country
        case 'country': this.searchKey.country = null; break;
        // if key is moreField
        case 'choseField': this.searchKey.fieldValue = []; break;
      }
    }
  }

}
