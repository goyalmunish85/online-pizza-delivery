import { Component, OnInit, Inject } from '@angular/core';
import { MatGridTile } from '@angular/material';
import { PizzaService } from '../../services/pizza.service';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private pizzaService: PizzaService, private media: ObservableMedia,
    @Inject('BaseURL') private BaseURL) { }
  value: String;
  pizzas;
  errMess: string;

  private nbCols: number = 2;
  ngOnInit() {

    this.pizzaService.getPizzas().subscribe(pizzas => this.pizzas = pizzas,
      errmess => this.errMess = <any>errmess);
    this.value = "Veg";
    this.updateGrids();
    this.media.subscribe(() => {
      this.updateGrids();
    });
  }
  private updateGrids(): void {
    if (this.media.isActive('xl')) { this.nbCols = 4; }
    else if (this.media.isActive('lg')) { this.nbCols = 4; }
    else if (this.media.isActive('md')) { this.nbCols = 4; }
    else if (this.media.isActive('sm')) { this.nbCols = 3; }
    else if (this.media.isActive('xs')) { this.nbCols = 2; }
  }
  x;
  filterItemsOfType() {
    console.log(this.value)
    return this.pizzas.filter(x => x.category == this.value);
  }
  selectCat(categ: String) {
    this.value = categ;
  }
}
