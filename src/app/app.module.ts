import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//Imported to use animations

import { MaterialModule } from './material.module';// CONTAINS ALL MATERIAL MODULES 

import { FlexLayoutModule } from '@angular/flex-layout';//for using flexlayout

import { AuthService } from './auth/auth.service'

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './header/header.component';
import { AddpizzaComponent } from './admin/addpizza/addpizza.component';
import { EditpizzaComponent } from './admin/editpizza/editpizza.component';
import { EditordersComponent } from './admin/editorders/editorders.component';
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
import { FeedbackService } from './services/feedback.service';

import { UserIdService } from './services/user-id.service';
import { CartComponent } from './user/cart/cart.component';
import { PizzadetailComponent } from './user/pizzadetail/pizzadetail.component';
import { baseURL } from './models/baseurl';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './models/restConfig';
import { VieworderComponent } from './admin/vieworder/vieworder.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './user/contact/contact.component';
import { YourorderComponent } from './user/yourorder/yourorder.component';
import { TrackorderComponent } from './user/trackorder/trackorder.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddpizzaComponent,
    EditpizzaComponent,
    EditordersComponent,
    ViewsalesComponent,
    ViewfeedbackComponent,
    MenuComponent,
    HomeComponent,
    UpdatepizzaComponent,
    FooterComponent,
    CartComponent,
    PizzadetailComponent,
    VieworderComponent,
    LoginComponent,

    SignupComponent,


    WelcomeComponent,

    SidenavListComponent,

    UserComponent,

    AdminComponent,

    ContactComponent,

    YourorderComponent,

    TrackorderComponent,

    //AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,


    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule, FlexLayoutModule,
    HttpModule, HttpClientModule,
    RestangularModule.forRoot(RestangularConfigFactory)

  ],
  providers: [
    PizzaService, AuthService,
    OrderService,
    CartService,UserIdService,FeedbackService,
    { provide: 'BaseURL', useValue: baseURL },
    ProcessHttpmsgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
