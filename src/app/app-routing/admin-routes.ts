import { Routes } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { AddpizzaComponent } from '../addpizza/addpizza.component';
import { EditpizzaComponent } from '../editpizza/editpizza.component';
import { EditordersComponent } from '../editorders/editorders.component';
import { UpdateorderstatusComponent } from '../updateorderstatus/updateorderstatus.component';
import { ViewsalesComponent } from '../viewsales/viewsales.component';
import { ViewfeedbackComponent } from '../viewfeedback/viewfeedback.component';
import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { UpdatepizzaComponent } from '../updatepizza/updatepizza.component';
import { FooterComponent } from '../footer/footer.component';
import { CartComponent } from '../cart/cart.component';
import { PizzadetailComponent } from '../pizzadetail/pizzadetail.component';
export const adminRoutes: Routes = [
    {path: 'home',     component:HomeComponent },
    {path: 'menu', component:MenuComponent},
    {path: 'cart',     component:CartComponent },
    {path: 'add-pizza', component: AddpizzaComponent},
    {path: 'edit-pizza', component: EditpizzaComponent},
    {path: 'edit-orders',component:EditordersComponent},
    {path:'update-order-status',component:UpdateorderstatusComponent},
    {path:'view-sales',component:ViewsalesComponent},
    {path:'view-feedback',component:ViewfeedbackComponent},
    {path: 'updatepizza/:id', component: UpdatepizzaComponent },
    {path: 'pizza-detail/:id', component: PizzadetailComponent }
  ] 
