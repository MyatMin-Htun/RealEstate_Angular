import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None         // allow material attribute to redesign
})

export class HomeComponent implements OnInit {

  @ViewChild('txtPriceInput', {static: false}) txtPriceInput: ElementRef;

  txtKey: string;
  txtPrice: string;
  txtCity: string;
  errorMessage: string;

  constructor() { }

  ngOnInit() {
  }

  validatePrice(): boolean {
    if (this.txtPrice) {
      if (+this.txtPrice < 0) {
        this.errorMessage = '*Invalid price';

        document.getElementById('lblPrice').scrollIntoView(true);
        // document.getElementById('lblPrice').scrollTop += 50;
        this.txtPriceInput.nativeElement.focus();

        return false;
      }
      return true;
    }
    return true;
  }

  searchRentInfo(): void {
    if (this.validatePrice()) {
      console.log(this.txtKey + ' : ' + this.errorMessage);
    }
  }

}
