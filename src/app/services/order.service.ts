import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Orders } from '../constants/order-constants';
import { order } from '../models/order';
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
export class OrderService {
  constructor(private restangular: Restangular,private http: Http,
    private processHTTPMsgService: ProcessHttpmsgService) { }

    getOrders(): Observable<order[]> {

      return this.restangular.all('orders').getList();
  }

  getOrder(id: number): Observable<order> {
    return  this.restangular.one('orders',id).get();
  }
  

}
