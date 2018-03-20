import { Routes } from '@angular/router';


import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';


export const userRoutes: Routes = [
    {path:'menu',component:MenuComponent},
    {path:'home',component:HomeComponent}
  ] 