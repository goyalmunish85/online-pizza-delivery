import { Injectable } from '@angular/core';
import { pizza } from '../models/pizza';
import { Pizzas } from '../constants/pizza-constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class PizzaService {

  constructor() { }


    getPizzas(): Observable<pizza[]> {
    return Observable.of(Pizzas).delay(2000);
  }

  getPizza(id: number): Observable<pizza> {
    return Observable.of(Pizzas.filter((p) => (p.id === id))[0]);
  }

 
}
