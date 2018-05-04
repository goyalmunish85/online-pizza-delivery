import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Orders } from '../constants/order-constants';
import { feedback } from '../models/feedback';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { baseURL } from '../models/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';
import { order } from '../models/order';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {UserIdService} from './user-id.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular,private http: Http,
    private processHTTPMsgService: ProcessHttpmsgService, private userId: UserIdService) { }
    private getHeaders(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
    }
    getFeedback(): Observable<feedback[]> {
      return this.http.get(baseURL +'feedback' )
                      .map(res => { console.log(res);return this.processHTTPMsgService.extractData(res);  })
                      .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }
    
    sendFeedback(feedback): Observable<Response> {
      return this.http.post(baseURL + 'feedback', feedback, { headers: this.getHeaders() });
    }
}
