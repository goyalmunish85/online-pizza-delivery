import { Injectable } from '@angular/core';
import { pizza } from '../models/pizza';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { baseURL } from '../models/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { ok } from 'assert';
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
    httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
    
    postPizza(pizza): Observable<Response> {
      return this.http.post(baseURL + 'pizzas', pizza, { headers: this.getHeaders() });
    }
    updatePizza(pizza, id:any): Observable<Response> {
      return this.http.put(baseURL + 'pizzas/'+ id, pizza, { headers: this.getHeaders() });
    }

    deletePizza(id: any): Observable<Response>{
      return this.http.delete(baseURL + 'pizzas/'+ id, { headers: this.getHeaders()});
    }
    
}
