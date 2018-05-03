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
  config;
  credentials: AuthData;
  submit(form: NgForm){
    this.authser.login({
      email: form.value.email,
      password : form.value.password
    });
  }
  

}
