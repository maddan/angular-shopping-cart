import { Component, OnInit } from '@angular/core';

export interface CartItems {
  name: string;
  price: number;
  quantity: number;
}

const CART_DATA: CartItems[] = [
  {name: 'Apple', price: .60, quantity: 2},
  {name: 'Orange', price: .25, quantity: 3},
]

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {  
  private items: CartItems[] = [];
  private total: number = 0;
  cartItemColumns: string[] = ['name', 'price', 'quantity'];
  dataSource = CART_DATA;
  constructor() { }

  ngOnInit() {
  }

  totalCost() {
    this.items = [];
    this.total = 0;
    for (let i=0; i < CART_DATA.length; i++) {
      let item = CART_DATA[i];
      console.log(item);
      this.items.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity
      });
      this.total += item.price * item.quantity;
    }
  }

  bogoCost() {
    this.items = [];
    this.total = 0;
    for (let i=0; i < CART_DATA.length; i++) {
      let item = CART_DATA[i];
      console.log(item);
      this.items.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity
      });
      if (item.name.toLowerCase() === 'apple') {
        if (item.quantity > 1 && item.quantity === 2) {
        this.total += item.price;
        }
      }
    }
  }

  threeforTwoCost() {
    this.items = [];
    this.total = 0;
    for (let i=0; i < CART_DATA.length; i++) {
      let item = CART_DATA[i];
      console.log(item);
      this.items.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity
      });
      if (item.name.toLowerCase() === 'orange') {
        if (item.quantity !== null && item.quantity === 3) {
          this.total += item.price * 2;
        }
      }
    }
  }
}
  
