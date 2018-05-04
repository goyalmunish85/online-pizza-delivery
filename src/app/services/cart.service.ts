import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Orders } from '../constants/order-constants';
import { Cart } from '../models/cart';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { baseURL } from '../models/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';
import { pizza } from '../models/pizza';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {UserIdService} from './user-id.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
@Injectable()
export class CartService {

  constructor(private restangular: Restangular,private http: Http,
    private processHTTPMsgService: ProcessHttpmsgService, private userId: UserIdService) { }

    getCartItems(): Observable<Cart[]> {
      return this.http.get(baseURL +'cart/' + this.userId.getId() )
                      .map(res => { return this.processHTTPMsgService.extractData(res); })
                      .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

    // getPizza(id: any): Observable<Cart> {
    //   return  this.http.get(baseURL + 'pizzas/'+ id)
    //                   .map(res => { return this.processHTTPMsgService.extractData(res); })
    //                   .catch(error => { return this.processHTTPMsgService.handleError(error); });
    // }
    private getHeaders(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
    }
    httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
    
    postCartItem(Cart): Observable<Response> {
      return this.http.post(baseURL + 'cart', Cart, { headers: this.getHeaders() });
    }
  
    deleteCartItem(id: any): Observable<Response>{
      return this.http.delete(baseURL + 'cart/'+ id, { headers: this.getHeaders()});
    }
}
