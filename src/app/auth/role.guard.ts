// This file handles access to links. It protects unauthorised access

import { Injectable } from '@angular/core';//To inject service
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { RoleService } from './role.service';

@Injectable() 
export class RoleGuard implements CanActivate{
    constructor(private role: RoleService, private router: Router) { }
    
    //standard method used to implement CanActivate
    canActivate( route :ActivatedRouteSnapshot, state: RouterStateSnapshot ){
        if(true){
            return true;
        }
        
    }
}