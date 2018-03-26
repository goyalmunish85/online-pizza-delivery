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
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';
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
  
  constructor(private restangular: Restangular,private fb: FormBuilder,private pizzaservice: PizzaService, private route: ActivatedRoute) {
    this.createForm();
  }
  
  createForm(){
    this.addpizzaForm = this.fb.group({
      id: 0,
      image:'',
      name:'',
      description:'',
      price: 0,
      category:''
    });
  }
  onSubmit(): Observable<pizza> {
    //this.pizzas.post();
    return this.restangular.all('pizzas').post(this.addpizzaForm.value);
  //   this.addpizzaForm.reset({
  //     id: 0,
  //     image:'',
  //     name:'',
  //     description:'',
  //     price: 0,
  //     category:''
  // });
  }

//   public submitaddpizzaForm(addpizzaForm: NgForm){
//     console.log(addpizzaForm.value);
// } 
}


