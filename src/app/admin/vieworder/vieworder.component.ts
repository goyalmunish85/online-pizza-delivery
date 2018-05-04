import { Component, OnInit } from '@angular/core';
import { pizza } from '../../models/pizza';
import { OrderService } from '../../services/order.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';
@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {

  constructor(private restangular: Restangular,private orderService: OrderService) { }
  public orders;
  ngOnInit() {
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  };
}
