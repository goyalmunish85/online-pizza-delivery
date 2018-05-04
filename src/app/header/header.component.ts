import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { UserIdService } from '../services/user-id.service';

import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  //emitter to toggle side av on sandwich button click
  @Output() sideNavTog = new EventEmitter<void>();

  constructor(private userId: UserIdService, private authser: AuthService) { 
    
  }

  isAuth : boolean = false;
  isAdmin : boolean = false;
  authSubscription: Subscription; 
  name: string  = "";
  ngOnInit() {
    this.authSubscription = this.authser.authChange.subscribe( authStatus => {
      this.isAuth = authStatus;
      this.name = this.userId.getName();
    })
    this.authSubscription = this.authser.authAdmin.subscribe( authStatus => {
      this.isAdmin = authStatus;
    })
   
  }

  toggleOnCLick(){
    this.sideNavTog.emit(); 
  }

  onLogout(){
    this.authser.logout();
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }

}
