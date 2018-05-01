import { Routes } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { AddpizzaComponent } from '../admin/addpizza/addpizza.component';
import { EditpizzaComponent } from '../admin/editpizza/editpizza.component';
import { EditordersComponent } from '../admin/editorders/editorders.component';
import { UpdateorderstatusComponent } from '../admin/updateorderstatus/updateorderstatus.component';
import { ViewsalesComponent } from '../admin/viewsales/viewsales.component';
import { ViewfeedbackComponent } from '../admin/viewfeedback/viewfeedback.component';
import { MenuComponent } from '../user/menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { UpdatepizzaComponent } from '../admin/updatepizza/updatepizza.component';
import { FooterComponent } from '../footer/footer.component';
import { CartComponent } from '../user/cart/cart.component';
import { PizzadetailComponent } from '../user/pizzadetail/pizzadetail.component';
import { OrderdetailComponent } from '../admin/orderdetail/orderdetail.component';
import { VieworderComponent } from '../admin/vieworder/vieworder.component';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';


import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { WelcomeComponent } from '../welcome/welcome.component';
export const routes: Routes = [
    
    {path: 'home',     component:HomeComponent , canActivate: [ AuthGuard ]},
    {path: 'menu', component:MenuComponent , canActivate: [ RoleGuard]},
    {path: 'cart',     component:CartComponent , canActivate: [ AuthGuard ]},

    { path: '', component: WelcomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },

    {path: 'add-pizza', component: AddpizzaComponent},
    {path: 'edit-pizza', component: EditpizzaComponent},
    {path: 'edit-orders',component:EditordersComponent},
    {path:'update-order-status',component:UpdateorderstatusComponent},
    {path:'view-sales',component:ViewsalesComponent},
    {path:'view-order',component:VieworderComponent},
    {path:'view-feedback',component:ViewfeedbackComponent},
    {path: 'updatepizza/:id', component: UpdatepizzaComponent },
    {path: 'pizza-detail/:id', component: PizzadetailComponent },
    {path: 'order-detail/:id', component: OrderdetailComponent }
] 

  