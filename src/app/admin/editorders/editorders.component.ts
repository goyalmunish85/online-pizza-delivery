import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
// import { Orders } from './../constants/order-constants';
import { pizza } from '../../models/pizza';
//import { PizzasService } from '../pizzas.service';
import { PizzaInterface } from '../../models/interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editorders',
  templateUrl: './editorders.component.html',
  styleUrls: ['./editorders.component.css']
})
export class EditordersComponent implements OnInit {

  constructor() { }
  public state:boolean = false;
  public select:number;
  ngOnInit() {
  }
  public orders;
  public showTable: boolean = true;
  updatetable(event: any, item: any)
  {
    this.select = null;
    this.state = !this.state;
    this.showTable = !(this.showTable);
  }
  edittable(event: any, item: any)
  {
    this.select = item.id;
    this.state = !this.state;
    this.showTable = !(this.showTable);
  }
}
