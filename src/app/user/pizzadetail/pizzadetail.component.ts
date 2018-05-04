import { Component, OnInit, Inject } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { pizza } from '../../models/pizza';
import { Cart } from '../../models/cart';
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PizzaService } from '../../services/pizza.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { MatSnackBar } from '@angular/material';
import { FormControl } from '@angular/forms';
import { UserIdService } from '../../services/user-id.service';
@Component({
  selector: 'app-pizzadetail',
  templateUrl: './pizzadetail.component.html',
  styleUrls: ['./pizzadetail.component.css']
})
export class PizzadetailComponent implements OnInit {

  value = {};
  hide = true;
  cart: Cart;
  selectedPizza;
  ngOnInit() {
    //this.pizzaservice.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
    this.route.params.switchMap((params: Params) => this.pizzaservice.getPizza(params['id']))
      .subscribe(selectedPizza => this.selectedPizza = selectedPizza);
  }
  constructor(private router: Router,private userId: UserIdService,public snackBar: MatSnackBar, private cartService: CartService, private fb: FormBuilder, private pizzaservice: PizzaService, private route: ActivatedRoute,
    @Inject('BaseURL') private BaseURL) {
  }

  addToCart(form: NgForm) {
   // this.selectedPizza.id += 1;
    //let atocart = Object.assign(form.value, this.selectedPizza);
  
    this.cart = {
      u_id : this.userId.getId(),
      p_id : this.selectedPizza._id,
      quantity: form.value.quantity,
      orderdescription: form.value.orderdescription 
    }
    console.log(form.value);
    let message = "Added!";
    let action = "Done";
    this.snackBar.open(message, action, {
      duration: 2000,
    });
    
    this.cartService.postCartItem(this.cart)
      .subscribe(response => {
        let status = response.status;
        //alert(`the response is : ${response.body.name}`);
        console.log(response);
      }, error => {
        alert(`Error is : ${error.error.message}`);
        console.log(error);
      })

      this.router.navigate(['/cart']);
  }

}
