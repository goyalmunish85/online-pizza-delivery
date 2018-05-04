import { Component, OnInit, ViewEncapsulation,ViewChild, Inject  } from '@angular/core';
import { pizza } from '../../models/pizza';
import { Cart } from '../../models/cart';
import { OrderService } from '../../services/order.service';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { PizzaInterface } from '../../models/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import 'rxjs/add/operator/switchMap';
import {order} from '../../models/order';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';

import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';
import {MatTableDataSource, MatSort} from '@angular/material';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {

 
  constructor(private cartService: CartService,private orderService: OrderService, @Inject('BaseURL') private BaseURL) { }
cart;
  ngOnInit() {
    //this.pizzaservice.getPizzas().subscribe(pizzas => this.pizzas = pizzas);

    this.cartService.getCartItems().subscribe(cart => this.cart = cart);
    //console.log(this.cart);
  }
  pizza;

  o: order;
  placeorder(){
    this.o = {
      u_id : "5aeaf574e86d6bf115327a1a",
      status: "Placed",
      bill: 4,
      pizzas:[]
    }
 
    for(var c=0; c < this.cart.length; c++){
      this.pizza = {
        p_id: this.cart[c].p_id,
        quantity: this.cart[c].quantity,
        orderdescription: this.cart[c].orderdescription
      }
      this.o.pizzas.push(this.pizza);
    }
    console.log(this.o);
    this.orderService.postOrder(this.o)
    .subscribe(response => {
      let status = response.status;
      //alert(`the response is : ${response.body.name}`);
      console.log(response);
    }, error => {
      alert(`Error is : ${error.error.message}`);
      console.log(error);
    })
  }

  deleteCartItem(event: any, cartItem: any) {
    console.log(cartItem._id);
    this.cartService.deleteCartItem(cartItem._id)
    .subscribe(response => {
      let status = response.status;
      //alert(`the response is : ${response.body.name}`);
      console.log(response);
    }, error => {
      alert(`Error is : ${error.error.message}`);
      console.log(error);
    })


  }


}

