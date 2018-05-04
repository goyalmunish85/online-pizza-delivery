import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {order} from '../../models/order';
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {
 
  ngOnInit() {
    //this.pizzaservice.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
   
  }
   constructor(private fb: FormBuilder,private orderservice: OrderService, private route: ActivatedRoute) {
  }

}
