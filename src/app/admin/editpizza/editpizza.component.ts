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
