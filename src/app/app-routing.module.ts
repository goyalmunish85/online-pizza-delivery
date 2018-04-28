import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { AuthGuard } from './auth/auth.guard';

const routes : Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: SignupComponent, canActivate: [ AuthGuard ] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: [],
  providers:[ 
    AuthGuard 
  ] //Auth guard is injected as a service by angular and has to be provided. Has to be provided in app.module. But in this special case it is provided in this module
})
export class AppRoutingModule { }
