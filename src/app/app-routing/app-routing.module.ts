import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';

import { routes } from './routes';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: [],
  providers:[ 
    AuthGuard,RoleGuard
  ]
})
export class AppRoutingModule { }
