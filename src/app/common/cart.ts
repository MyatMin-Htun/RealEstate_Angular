import { Injectable } from '@angular/core';
import { CartItem } from './cartItem';

@Injectable()
export class Cart {

    // object array with [cartItem]
    cart: CartItem[] = [];
}
