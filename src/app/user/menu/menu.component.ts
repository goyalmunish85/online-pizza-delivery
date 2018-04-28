import { Component, OnInit, Inject } from '@angular/core';


import { PizzaService } from '../../services/pizza.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private pizzaService: PizzaService,
    @Inject('BaseURL') private BaseURL) { }

  pizzas;
  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
  }
}
