import { Component, ViewChild, OnInit,OnChanges  } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import 'rxjs/add/operator/switchMap';
import {order} from '../../models/order';
import { pizza } from '../../models/pizza';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { PizzaService } from '../../services/pizza.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';
import {MatTableDataSource, MatSort} from '@angular/material';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit, OnChanges  {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private restangular: Restangular,private http: HttpClient, private cartService: CartService ) { }
  
  cartItems;
  
  ngOnInit(){
    this.cartService.getCartItems().subscribe(cartItems => this.cartItems = cartItems);
  }
  //dataSource = new MatTableDataSource(this.cartItems);
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  placeorder(event,c) {
  //  console.log(c[0].id);
      this.restangular.all('orders').customPOST({"item": this.cartItems});
      
      for(var i=0;i<c.length;i++){
        this.restangular.one('cart',c[i].id).remove();
      }
  }
  
    ngOnChanges(){

    }
  updatedata(){
    this.cartService.getCartItems().subscribe(cartItems => {
      this.cartItems = cartItems;
      //console.log(this.cartItems);
    });
  }
  deleteitem(event: any, p: any) {
     console.log(p._id);
     this.http.delete('http://localhost:3000/cart/' + p._id).subscribe((ok)=>{});
     //this.restangular.one('cart',p._id).remove();
     this.updatedata();
  }
  
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

