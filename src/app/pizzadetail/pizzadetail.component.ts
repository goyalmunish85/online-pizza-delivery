import { Component, OnInit, Inject } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {order} from '../models/order';
import { pizza } from '../models/pizza';
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { PizzaService } from '../services/pizza.service';
import { Pizzas } from './../constants/pizza-constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';
@Component({
  selector: 'app-pizzadetail',
  templateUrl: './pizzadetail.component.html',
  styleUrls: ['./pizzadetail.component.css']
})
export class PizzadetailComponent implements OnInit {

  addToCartForm: FormGroup;
  value={};
 
  public desc;
  pizzas= Pizzas;
  p: pizza;
  
  createForm(){
    this.addToCartForm = this.fb.group({
      quantity: 1,
      orderdescription:''
    });
  }
  ngOnInit() {
    //this.pizzaservice.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
    this.route.params.switchMap((params: Params)=> this.pizzaservice.getPizza(+params['id'])) 
            .subscribe(p => this.p = p);
  }
   constructor(private restangular: Restangular,private fb: FormBuilder,private pizzaservice: PizzaService, private route: ActivatedRoute,
    @Inject('BaseURL') private BaseURL) {
      this.createForm();
  }

  addToCart(event): Observable<pizza> {
    console.log(this.addToCartForm.value);
    this.p.id += 1;
    return this.restangular.all('cart').post(this.p);
  }
 
}
