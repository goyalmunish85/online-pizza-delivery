import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

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

  submit(form: NgForm){
    this.authser.login({
      email: form.value.email,
      password : form.value.password
    });
  }
  

}
