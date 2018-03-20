import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-addpizza',
//   templateUrl: './addpizza.component.html',
//   styleUrls: ['./addpizza.component.css']
// })
// export class AddpizzaComponent implements OnInit {


//   ngOnInit() {
//   }
  
//   constructor() {}
//   public submitaddpizzaForm(addpizzaForm: NgForm){
//       alert(addpizzaForm.value.productName);
//   }  
// }
import 'rxjs/add/operator/switchMap';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { pizza, Category } from '../models/pizza';
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { PizzaService} from '../services/pizza.service';
import { Pizzas } from './../constants/pizza-constants';
@Component({
  selector: 'app-addpizza',
  templateUrl: './addpizza.component.html',
  styleUrls: ['./addpizza.component.css']
})
export class AddpizzaComponent implements OnInit {

  addpizzaForm: FormGroup;
  p: pizza;
  pizzas= Pizzas;
  category = Category;
  ngOnInit() {
    this.pizzaservice.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
  }
  
  constructor(private fb: FormBuilder,private pizzaservice: PizzaService, private route: ActivatedRoute) {
    this.createForm();
  }
  
  createForm(){
    this.addpizzaForm = this.fb.group({
      id: 0,
      name:'',
      description:'',
      price: 0,
      category:''
    });
  }
  onSubmit(){
    this.pizzas.push(this.addpizzaForm.value);
    this.addpizzaForm.reset();
  }
//   public submitaddpizzaForm(addpizzaForm: NgForm){
//     console.log(addpizzaForm.value);
// } 
}


