import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//Imported to use animations

import { MaterialModule } from './material.module';// CONTAINS ALL MATERIAL MODULES 

import { FlexLayoutModule } from '@angular/flex-layout';//for using flexlayout
//import { FormsModule } from '@angular/forms'//to import reactive form

import { AuthService } from './auth/auth.service'
import { RoleService } from './auth/role.service'

//All the components created are below
//import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
//import { TrainingComponent } from './training/training.component';
//import { CurrentTrainingComponent } from './training/current-training/current-training.component';
//import { NewTrainingComponent } from './training/new-training/new-training.component';
///import { PastTrainingComponent } from './training/past-training/past-training.component';
//import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
//import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
//import { StopTrainingComponent } from './training/current-training/stop-training/stop-training.component';


import { HeaderComponent } from './header/header.component';
import { AddpizzaComponent } from './admin/addpizza/addpizza.component';
import { EditpizzaComponent } from './admin/editpizza/editpizza.component';
import { EditordersComponent } from './admin/editorders/editorders.component';
import { UpdateorderstatusComponent } from './admin/updateorderstatus/updateorderstatus.component';
import { ViewsalesComponent } from './admin/viewsales/viewsales.component';
import { ViewfeedbackComponent } from './admin/viewfeedback/viewfeedback.component';
import { MenuComponent } from './user/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { UpdatepizzaComponent } from './admin/updatepizza/updatepizza.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzaService } from './services/pizza.service';
import { OrderService } from './services/order.service';
import { CartService } from './services/cart.service';
import { CartComponent } from './user/cart/cart.component';
//import { OrderdetailComponent } from './orderdetail/orderdetail.component
import { PizzadetailComponent } from './user/pizzadetail/pizzadetail.component';
import { baseURL } from './models/baseurl';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './models/restConfig';
import { VieworderComponent } from './admin/vieworder/vieworder.component';
import { OrderdetailComponent } from './admin/orderdetail/orderdetail.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
//import { AdminComponent } from './admin/admin.component';
//import { LoginComponent } from './login/login.component';
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
    PizzadetailComponent,
    VieworderComponent,
    OrderdetailComponent,
    LoginComponent,

    SignupComponent,
 

    WelcomeComponent,

    SidenavListComponent,

    UserComponent,

    AdminComponent,

    //AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,


    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,FlexLayoutModule,
    HttpModule, HttpClientModule,
    RestangularModule.forRoot(RestangularConfigFactory)
    
  ],
  providers: [
    PizzaService, AuthService,RoleService,
    OrderService, 
    CartService,
    {provide: 'BaseURL', useValue: baseURL},
    ProcessHttpmsgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
