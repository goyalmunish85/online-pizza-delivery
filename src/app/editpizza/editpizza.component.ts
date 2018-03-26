import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import { Pizzas } from './../constants/pizza-constants';
import { pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';
import { PizzaInterface } from '../models/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';
@Component({
  selector: 'app-editpizza',
  templateUrl: './editpizza.component.html',
  styleUrls: ['./editpizza.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditpizzaComponent implements OnInit {
  public pizzas=Pizzas;
  constructor(private restangular: Restangular,private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
  }
  deletepizza(event: any, p: any): Observable<pizza> {
    console.log(p.id);
    return this.restangular.one('pizzas',p.id).remove();
  }


}

// export class MainPageComponent implements OnInit {


//   public buttonstate = false;
//   public studentname = "Munish";
//   public books: Array<book>;
//   public book2: BookInterface;
//   @ViewChild(DatatableComponent)
//   private datableChild: DatatableComponent;
 
//   public mybook = new book('Science', 'SomeABC');
//   constructor(private booksService: BooksService, private http: HttpClient) {
//     console.log("header component is created");
//     console.log(`The value of my book is : ${this.mybook}`);
//   //   this.books = booksService.getBooksList();
//   //   for(let i in this.books) {
//   //     let bookEntrydate = this.books[i].entryDate;
//   //     if(typeof bookEntrydate !="object" )
//   //     {
//   //     if(bookEntrydate != undefined) this.books[i].entryDate = new Date(bookEntrydate.slice(0, 4), bookEntrydate.slice(5, 7), bookEntrydate.slice(8))
//   //   }
//   // }
//    this.http.get<book[]>('http://localhost:8000/books').subscribe(
//      response => {
//        this.books = response;
//      }
//    );
//   }
//   public clickSubmit() {
//     this.datableChild.parentSharedMethod();
//     alert("successfully");
//   }

//   ngOnInit() {
//     console.log("ngOnInit method is created");
//     this.book2 = {name: '',volume: 1,entryDate: ''};
//   }
//   ngOnChanges() {
//     console.log("Some change in the component");
//   }

//   public selectedBookName : string;
//   public bookSelected(selectedBook)
//   {
//     this.selectedBookName =  selectedBook.name;
//   }
//   public showTable: boolean = true;
//   toogleTableVisibility() {
//     this.showTable = !(this.showTable)
//   }

  
// }
