import { Component, OnInit,OnChanges  } from '@angular/core';
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
export class CartComponent implements OnInit, OnChanges  {
 
  constructor(private restangular: Restangular,private http: HttpClient, private cartService: CartService ) { }
  cartItems;
  ngOnInit(){
    this.cartService.getCartItems().subscribe(cartItems => this.cartItems = cartItems);
  }

  placeorder(event,c) {
  //  console.log(c[0].id);
      this.restangular.all('orders').customPOST({"item": this.cartItems});
      
      for(var i=0;i<c.length;i++){
        this.restangular.one('cart',c[i].id).remove();
      }
  }
  
    ngOnChanges(){

    }
  updatedata(){
    this.cartService.getCartItems().subscribe(cartItems => {
      this.cartItems = cartItems;
      //console.log(this.cartItems);
    });
  }
  deleteitem(event: any, p: any) {
     console.log(p._id);
     this.http.delete('http://localhost:3000/cart/' + p._id).subscribe((ok)=>{});
     //this.restangular.one('cart',p._id).remove();
     this.updatedata();
  }
  
}
