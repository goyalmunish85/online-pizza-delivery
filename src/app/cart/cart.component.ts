import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  constructor(private cartService: CartService ) { }
  cartItems;
  ngOnInit(){
    this.cartService.getCartItems().subscribe(cartItems => this.cartItems = cartItems);
  }
}
