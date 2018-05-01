import { Injectable } from '@angular/core';
import { pizza } from '../models/pizza';
import { Pizzas } from '../constants/pizza-constants';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
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
      return this.http.get(baseURL + 'pizzas')
                      .map(res => { return this.processHTTPMsgService.extractData(res); })
                      .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

    getPizza(id: any): Observable<pizza> {
      return  this.http.get(baseURL + 'pizzas/'+ id)
                      .map(res => { return this.processHTTPMsgService.extractData(res); })
                      .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }
    private getHeaders(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
    }
    postPizza(pizza): Observable<Response> {
      return this.http.post(baseURL + 'pizzas', JSON.stringify(pizza), { headers: this.getHeaders() });
    }
    
}
