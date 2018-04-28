import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  //Emiiter to close sidenave on button click
  @Output() listclose = new EventEmitter<void>();
  authSubscription = new Subscription();
  
  constructor(private authser: AuthService) { }

  isAuth: boolean;

  ngOnInit() {
    this.authSubscription = this.authser.authChange.subscribe( authStatus => {
      this.isAuth = authStatus;
    })
  }

  listClose(){
    this.listclose.emit();
  }

  onLogout(){
    this.listClose();
    this.authser.logout();
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }
}
