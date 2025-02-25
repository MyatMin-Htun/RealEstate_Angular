import { Injectable } from '@angular/core';
import { CartItem } from './cartItem';

@Injectable()
export class Cart {

    // object array with [cartItem]
    cart: CartItem[] = [];

    // add Item to [cart] Object array
    addItem(data: CartItem) {
        this.cart.push(data);
    }

    // update Item to [cart] Object array
    updateItem(data: CartItem) {
        // find if chosen field id exists in [cart.id]
      const index: number = this.cart.findIndex(indexID => indexID.id === data.id);
      // if exists
      if (index !== -1) {
        // discard item from [cart]
        this.cart.splice(index, 1);
      } else {
        // else, add item to [cart]
        this.cart.push(data);
      }
    }
}
