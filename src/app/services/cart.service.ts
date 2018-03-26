import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Orders } from '../constants/order-constants';
import {Cart } from '../models/cart';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Http, Response } from '@angular/http';
import { baseURL } from '../models/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
@Injectable()
export class CartService {

  constructor(private restangular: Restangular,private http: Http,
    private processHTTPMsgService: ProcessHttpmsgService) { }

    getCartItems(): Observable<Cart[]> {

      return this.restangular.all('cart').getList();
  }

  getCartItem(id: number): Observable<Cart> {
    return  this.restangular.one('cart',id).get();
  }
}
3