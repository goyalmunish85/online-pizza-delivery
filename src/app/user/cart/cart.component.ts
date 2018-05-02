import { Component, OnInit, ViewEncapsulation,ViewChild, Inject  } from '@angular/core';

import { pizza } from '../../models/pizza';

import { Cart } from '../../models/cart';



import { PizzaService } from '../../services/pizza.service';
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
  dataSource = new CartDataSource(this.cartService);
  displayedColumns = ['select','name','image','description','price','category'];

  constructor(private cartService: CartService,private pizzaService: PizzaService, @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  }


  deletepizza(event: any, p: any) {
    console.log(p._id);
    // this.pizzaService.deletePizza(p._id)
    // .subscribe(response => {
    //   let status = response.status;
    //   //alert(`the response is : ${response.body.name}`);
    //   console.log(response);
    // }, error => {
    //   alert(`Error is : ${error.error.message}`);
    //   console.log(error);
    // })

    this.dataSource = new CartDataSource(this.cartService);

  }


}
export class CartDataSource extends DataSource<any> {
  constructor(private cartService: CartService) {
    super();
  }
  connect(): Observable<Cart[]> {
    return this.cartService.getCartItems();
  }
  disconnect() {}
}

