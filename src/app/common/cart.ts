import { Injectable } from '@angular/core';

@Injectable()
export class Cart {
    // object array for cart item
    cart = [
        { id: 0, key: 'default', price: 200, address: 'default' }
    ];
}
