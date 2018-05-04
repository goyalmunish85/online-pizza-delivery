import { Routes } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { AddpizzaComponent } from '../admin/addpizza/addpizza.component';
import { EditpizzaComponent } from '../admin/editpizza/editpizza.component';
import { EditordersComponent } from '../admin/editorders/editorders.component';
import { ViewsalesComponent } from '../admin/viewsales/viewsales.component';
import { ViewfeedbackComponent } from '../admin/viewfeedback/viewfeedback.component';
import { MenuComponent } from '../user/menu/menu.component';
import { TrackorderComponent } from '../user/trackorder/trackorder.component';

import { YourorderComponent } from '../user/yourorder/yourorder.component';
import { HomeComponent } from '../home/home.component';
import { UpdatepizzaComponent } from '../admin/updatepizza/updatepizza.component';
import { FooterComponent } from '../footer/footer.component';
import { CartComponent } from '../user/cart/cart.component';
import { PizzadetailComponent } from '../user/pizzadetail/pizzadetail.component';
import { ContactComponent } from '../user/contact/contact.component';
import { VieworderComponent } from '../admin/vieworder/vieworder.component';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';


import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { WelcomeComponent } from '../welcome/welcome.component';
export const routes: Routes = [
    
    {path: 'home',     component:HomeComponent , canActivate: [ AuthGuard ]},
    {path: 'menu', component:MenuComponent , canActivate: [ AuthGuard ] },
    {path: 'cart',     component:CartComponent , canActivate: [ AuthGuard ]},
    {path: 'contactus',     component:ContactComponent },
    {path: 'yourorder',     component: YourorderComponent , canActivate: [ AuthGuard ]},
    { path: '', component: WelcomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },

    {path: 'add-pizza', component: AddpizzaComponent, canActivate: [ RoleGuard] },
    {path: 'edit-pizza', component: EditpizzaComponent, canActivate: [ RoleGuard] },
    {path: 'edit-orders',component:EditordersComponent, canActivate: [ RoleGuard] },
    {path:'view-sales',component:ViewsalesComponent, canActivate: [ RoleGuard] },
    {path:'view-order',component:VieworderComponent, canActivate: [ RoleGuard] },
    {path:'view-feedback',component:ViewfeedbackComponent, canActivate: [ RoleGuard] },
    {path: 'updatepizza/:id', component: UpdatepizzaComponent , canActivate: [ RoleGuard] },
    {path: 'pizza-detail/:id', component: PizzadetailComponent, canActivate: [ AuthGuard ] },
] 

  