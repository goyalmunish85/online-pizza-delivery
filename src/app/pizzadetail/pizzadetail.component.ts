import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {order} from '../models/order';
import { pizza } from '../models/pizza';
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { PizzaService } from '../services/pizza.service';
import { Pizzas } from './../constants/pizza-constants';
@Component({
  selector: 'app-pizzadetail',
  templateUrl: './pizzadetail.component.html',
  styleUrls: ['./pizzadetail.component.css']
})
export class PizzadetailComponent implements OnInit {

  value={};
  updatepizzaForm: FormGroup;
  
  pizzas= Pizzas;
  p: pizza;
  ngOnInit() {
    //this.pizzaservice.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
    this.route.params.switchMap((params: Params)=> this.pizzaservice.getPizza(+params['id'])) 
            .subscribe(p => this.p = p);
  }
   constructor(private fb: FormBuilder,private pizzaservice: PizzaService, private route: ActivatedRoute) {
  }

}
