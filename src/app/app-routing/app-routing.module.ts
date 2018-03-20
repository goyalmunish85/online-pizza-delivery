import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { adminRoutes } from './admin-routes';
import { userRoutes } from './user-routes';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(adminRoutes),
    RouterModule.forRoot(userRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
