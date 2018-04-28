// This file handles access to links. It protects unauthorised access

import { Injectable } from '@angular/core';//To inject service
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable() 
export class AuthGuard implements CanActivate{
    constructor(private authser: AuthService, private router: Router) { }
    
    //standard method used to implement CanActivate
    canActivate( route :ActivatedRouteSnapshot, state: RouterStateSnapshot ){
        if(this.authser.isAuth()== true){
            return true;
        }
        else{
            this.router.navigate(['/login']);
        }
    }
}