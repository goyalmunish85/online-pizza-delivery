import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthData } from '../auth-data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true;
  constructor(private authser: AuthService) { }

  ngOnInit() {
  }
  credentials: AuthData;
  result;
  pizzas;
  errMess;
  submit(form: NgForm){
    this.credentials = {
      email: form.value.email,
      password : form.value.password
    };
    this.authser.succes(this.credentials).subscribe(pizzas => {this.pizzas = pizzas, this.authser.checkFun(pizzas)},
      errmess => this.errMess = <any>errmess);

    // this.authser.login({
    //   email: form.value.email,
    //   password : form.value.password
    // });
  }

  
}
