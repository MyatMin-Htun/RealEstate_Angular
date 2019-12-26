import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

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
    {icon: 'add', value: 'air-condition', select: false},
    {icon: 'add', value: 'wifi', select: false},
    {icon: 'add', value: 'pool', select: false},
    {icon: 'add', value: 'lift', select: false},
    {icon: 'add', value: 'sea-view', select: false}];
  choseField: string[] = [];                  // chosen field data from search form

  constructor() { }

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
      // clear the Error Message
      this.errorMessage = '';

      console.log(this.txtKey + ' : ' + this.errorMessage);
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

}
