import { Injectable } from '@angular/core';
import { pizza } from '../models/pizza';
import { Pizzas } from '../constants/pizza-constants';
import { Http, Response } from '@angular/http';
import { baseURL } from '../models/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
@Injectable()
export class PizzaService {
  constructor(private restangular: Restangular,private http: Http,
    private processHTTPMsgService: ProcessHttpmsgService) { }

    getPizzas(): Observable<pizza[]> {

      return this.restangular.all('pizzas').getList();
  }

  getPizza(id: number): Observable<pizza> {
    return  this.restangular.one('pizzas',id).get();
  }
  

 
}
