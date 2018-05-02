import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;
  minDate;
  
  constructor(private authser: AuthService) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.minDate = new Date();
    this.minDate.setFullYear(this.minDate.getFullYear() - 100);
  }
  hide=true;

  submit(form : NgForm){
   // console.log(form.value);
    this.authser.registerUser(form.value)
    .subscribe(response => {
      let status = response.status;
      //alert(`the response is : ${response.body.name}`);
      console.log(response);
    }, error => {
      alert(`Error is : ${error.error.message}`);
      console.log(error);
    })
  }

  // submit(form: NgForm){
  //   console.log(form); 
  // } 
}
