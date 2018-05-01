import { Component, OnInit } from '@angular/core';
import { pizza, Category } from '../../models/pizza';
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { PizzaService } from '../../services/pizza.service';
@Component({
  selector: 'app-addpizza',
  templateUrl: './addpizza.component.html',
  styleUrls: ['./addpizza.component.css']
})
export class AddpizzaComponent implements OnInit {

  Pizza: pizza;
  category = Category;
  ngOnInit() {
  }

  constructor(private pizzaservice: PizzaService, private route: ActivatedRoute) {
  }

  submit(form: NgForm) {
    this.Pizza = {
      name: form.value.name,
      image: 'images/s3.jpg',
      description: form.value.description,
      price: form.value.price,
      category: form.value.category
    };

    this.pizzaservice.postPizza(this.Pizza)
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




