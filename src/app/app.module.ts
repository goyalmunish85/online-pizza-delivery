import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { AddpizzaComponent } from './addpizza/addpizza.component';
import { EditpizzaComponent } from './editpizza/editpizza.component';
import { EditordersComponent } from './editorders/editorders.component';
import { UpdateorderstatusComponent } from './updateorderstatus/updateorderstatus.component';
import { ViewsalesComponent } from './viewsales/viewsales.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { UpdatepizzaComponent } from './updatepizza/updatepizza.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzaService } from './services/pizza.service';
import { OrderService } from './services/order.service';
import { CartService } from './services/cart.service';
import { CartComponent } from './cart/cart.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { PizzadetailComponent } from './pizzadetail/pizzadetail.component';
import { baseURL } from './models/baseurl';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './models/restConfig';
import { VieworderComponent } from './vieworder/vieworder.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddpizzaComponent,
    EditpizzaComponent,
    EditordersComponent,
    UpdateorderstatusComponent,
    ViewsalesComponent,
    ViewfeedbackComponent,
    MenuComponent,
    HomeComponent,
    UpdatepizzaComponent,
    FooterComponent,
    CartComponent,
    OrderDetailComponent,
    PizzadetailComponent,
    VieworderComponent,
    OrderdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RestangularModule.forRoot(RestangularConfigFactory)
    
  ],
  providers: [
    PizzaService, 
    OrderService,
    CartService,
    {provide: 'BaseURL', useValue: baseURL},
    ProcessHttpmsgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
