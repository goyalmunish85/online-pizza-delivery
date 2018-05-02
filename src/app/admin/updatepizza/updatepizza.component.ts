import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { pizza, Category } from '../../models/pizza';
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';
import { PizzaService} from '../../services/pizza.service';

@Component({
  selector: 'app-updatepizza',
  templateUrl: './updatepizza.component.html',
  styleUrls: ['./updatepizza.component.css']
})
export class UpdatepizzaComponent implements OnInit {

  

  selectedPizza;
  category = Category;
 
  ngOnInit() {
    //this.pizzaservice.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
    this.route.params.switchMap((params: Params)=> this.pizzaservice.getPizza(params['id'])) 
            .subscribe(p => this.selectedPizza = p);
  }

  Pizza: pizza;

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
    
    this.pizzaservice.updatePizza(this.Pizza,this.selectedPizza._id)
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

 



  
 
  


