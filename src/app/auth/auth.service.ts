import { Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  private user: User;
  
  authChange = new Subject<boolean>();//Sends data onChange
  
  registerUser(authdata: AuthData){
    this.user = {
      email: authdata.email,
      userId: Math.round(Math.random()*10000).toString() 
    };
    this.authSuccessfully();
  }

  login(authdata: AuthData ){
    this.user = {
      email: authdata.email,
      userId: Math.round(Math.random()*10000).toString() 
    };
    this.authSuccessfully();
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

  authSuccessfully()
  {
    this.authChange.next(true);
    this.router.navigate(['/home']);
  }
  

  constructor( private router: Router ) { }

}
