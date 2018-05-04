import { Component, OnInit } from '@angular/core';
import { pizza, Category } from '../../models/pizza';
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FeedbackService } from '../../services/feedback.service';
import 'rxjs/add/operator/switchMap';
import { Cart } from '../../models/cart';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { MatSnackBar } from '@angular/material';
import { FormControl } from '@angular/forms';
import { UserIdService } from '../../services/user-id.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Pizza: pizza;
  category = Category;
  ngOnInit() {
  }

  constructor(private feedbackService: FeedbackService,private userId: UserIdService, private route: ActivatedRoute) {
  }

  
feedback;
  submit(form: NgForm) {
   
    this.feedback = {
      u_id : this.userId.getId(),

      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email,
      feedback: form.value.userfeedback,
      contactBack: form.value.contactBack
        }
    console.log(this.feedback);
    // let message = "Added!";
    // let action = "Done";
    // this.snackBar.open(message, action, {
    //   duration: 2000,
    // });
    
    this.feedbackService.sendFeedback(this.feedback)
      .subscribe(response => {
        let status = response.status;
        //alert(`the response is : ${response.body.name}`);
        console.log(response);
      }, error => {
        alert(`Error is : ${error.error.message}`);
        console.log(error);
      })
}
}
