import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { adminRoutes } from './admin-routes';
import { userRoutes } from './user-routes';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(adminRoutes)
  ],
  exports: [ RouterModule ],
  declarations: [],
  providers:[ 
    AuthGuard 
  ]
})
export class AppRoutingModule { }
