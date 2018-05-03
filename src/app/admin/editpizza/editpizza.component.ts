import { Component, OnInit, ViewEncapsulation,ViewChild, Inject  } from '@angular/core';

import { pizza } from '../../models/pizza';


import { PizzaService } from '../../services/pizza.service';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { PizzaInterface } from '../../models/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-editpizza',
  templateUrl: './editpizza.component.html',
  styleUrls: ['./editpizza.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditpizzaComponent implements OnInit {

  dataSource = new PizzaDataSource(this.pizzaService);
  displayedColumns = ['select','name','image','description','price','category'];

  constructor(private pizzaService: PizzaService, @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  }


  deletepizza(event: any, p: any) {
    console.log(p._id);
    this.pizzaService.deletePizza(p._id)
    .subscribe(response => {
      let status = response.status;
      //alert(`the response is : ${response.body.name}`);
      console.log(response);
    }, error => {
      alert(`Error is : ${error.error.message}`);
      console.log(error);
    })

    this.dataSource = new PizzaDataSource(this.pizzaService);

  }


}
export class PizzaDataSource extends DataSource<any> {
  constructor(private pizzaService: PizzaService) {
    super();
  }
  connect(): Observable<pizza[]> {
    return this.pizzaService.getPizzas();
  }
  disconnect() {}
}

