import { Component, OnInit, Inject } from '@angular/core';
import { MatGridTile } from '@angular/material';
import { PizzaService } from '../../services/pizza.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private pizzaService: PizzaService,
    @Inject('BaseURL') private BaseURL) { }
    value: String;
  pizzas;
  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
    this.value = "Veg";
  }
  x;
  filterItemsOfType(){
    console.log(this.value)
    return this.pizzas.filter(x => x.category == this.value);
}
  selectCat(categ: String){
    this.value = categ;
}
}
