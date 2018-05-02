import { Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { baseURL } from '../models/baseurl';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
@Injectable()
export class AuthService {
  private user: User;
  admin: true;
  authChange = new Subject<boolean>();//Sends data onChange
  authAdmin = new Subject<boolean>();//Sends data onChange
 
  registerUser(authdata: AuthData): Observable<Response> {
    console.log(authdata);
    this.authSuccessfully(true);
   return  this.http.post(baseURL + 'users', authdata, { headers: this.getHeaders() });
    //this.restangular.all('User').customPOST(this.user);
    
  }
  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  login(authdata: AuthData ){
    this.user = {
      email: authdata.email,
      userId: Math.round(Math.random()*10000).toString(),
      admin: false
        };
    this.authSuccessfully(this.user.admin);
  }

  logout(){
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  //this method returns user not as an object but an array of its attributes
  //so that user credentials can't be changed by other parts of the app
  getUser()
  {
    return {...this.user};
  }

  isAuth()
  {
    return this.user != null;
  }
  isAdmin(){
    return true;
  }
  authSuccessfully(admin: boolean)
  {
    this.authChange.next(true);
    this.authAdmin.next(admin);
    this.router.navigate(['/home']);
  }
  

  constructor( private router: Router, private restangular: Restangular, private http: Http ) { }

}
