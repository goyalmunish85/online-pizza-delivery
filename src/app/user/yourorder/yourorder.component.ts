import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-yourorder',
  templateUrl: './yourorder.component.html',
  styleUrls: ['./yourorder.component.css']
})
export class YourorderComponent implements OnInit {

  constructor(private orderService: OrderService) { }
  order;
  ngOnInit() {
    this.orderService.getUserOrder().subscribe(order => this.order = order);
  }
  orders(){
    console.log(this.order);
  }
}
