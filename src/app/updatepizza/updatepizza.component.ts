import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { pizza, Category } from '../models/pizza';
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';
import { PizzaService} from '../services/pizza.service';
import { Pizzas } from './../constants/pizza-constants';

@Component({
  selector: 'app-updatepizza',
  templateUrl: './updatepizza.component.html',
  styleUrls: ['./updatepizza.component.css']
})
export class UpdatepizzaComponent implements OnInit {

  value={};
  updatepizzaForm: FormGroup;
  
  pizzas= Pizzas;
  p: pizza;
  category = Category;
 
  ngOnInit() {
    //this.pizzaservice.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
    this.route.params.switchMap((params: Params)=> this.pizzaservice.getPizza(+params['id'])) 
            .subscribe(p => this.p = p);
  }
   constructor(private restangular: Restangular,private fb: FormBuilder,private pizzaservice: PizzaService, private route: ActivatedRoute) {
    this.createForm();
  }
  
  createForm(){
    this.updatepizzaForm = this.fb.group({
      id: 0,
      name:'',
      description:'',
      price: 0,
      category:''
    });
  }
 
   
   
    
 
  onSubmit(): Observable<pizza> {
    //this.pizzas.post();
    console.log(this.p.id);
    return this.restangular.one('pizzas',this.p.id).customPUT(this.updatepizzaForm.value);
   // this.updatepizzaForm.reset();
  }
}

 



  
 
  


