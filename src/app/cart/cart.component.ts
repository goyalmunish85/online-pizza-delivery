import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CartService } from '../services/cart.service';
import 'rxjs/add/operator/switchMap';
import {order} from '../models/order';
import { pizza } from '../models/pizza';

import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { PizzaService } from '../services/pizza.service';
import { Pizzas } from './../constants/pizza-constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  constructor(private restangular: Restangular,private cartService: CartService ) { }
  cartItems;
  ngOnInit(){
    this.cartService.getCartItems().subscribe(cartItems => this.cartItems = cartItems);
  }

  placeorder(event,c) {
  //  console.log(c[0].id);
      //this.restangular.all('orders').customPOST({"item": this.cartItems});
      
      for(var i=0;i<c.length;i++){
        this.restangular.one('cart',c[i].id).remove();
      }
  }
  deleteitem(event: any, p: any) {
    
    return this.restangular.one('cart',p.id).remove();
  }
  
}
