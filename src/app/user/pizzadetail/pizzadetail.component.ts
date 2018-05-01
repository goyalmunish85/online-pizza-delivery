import { Component, OnInit, Inject } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { pizza } from '../../models/pizza';
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PizzaService } from '../../services/pizza.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { MatSnackBar } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pizzadetail',
  templateUrl: './pizzadetail.component.html',
  styleUrls: ['./pizzadetail.component.css']
})
export class PizzadetailComponent implements OnInit {

  value = {};
  hide = true;
  selectedPizza: pizza;
  ngOnInit() {
    //this.pizzaservice.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
    this.route.params.switchMap((params: Params) => this.pizzaservice.getPizza(params['id']))
      .subscribe(selectedPizza => this.selectedPizza = selectedPizza);
  }
  constructor(public snackBar: MatSnackBar, private restangular: Restangular, private fb: FormBuilder, private pizzaservice: PizzaService, private route: ActivatedRoute,
    @Inject('BaseURL') private BaseURL) {
  }

  addToCart(form: NgForm): Observable<pizza> {
    this.selectedPizza.id += 1;
    let atocart = Object.assign(form.value, this.selectedPizza);
    let message = "Added!";
    let action = "Done";
    this.snackBar.open(message, action, {
      duration: 2000,
    });
    return this.restangular.all('cart').customPOST(atocart);
  }

}
