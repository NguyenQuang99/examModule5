import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {Book} from "../model/book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  // @ts-ignore
  bookQuantity: number;

  constructor(private bookService: BookService) { }


  ngOnInit(): void {
    this.getAll();
    this.bookService.shouldRefresh.subscribe(result =>{
      this.getAll();
      console.log(result);
    });
  }
  getAll(): void{
    this.bookService.getAll().subscribe((result) =>{
      this.books = result;
      this.bookQuantity = this.books.length;
    }, error => {

    });
  }
  onDelete(id: number): void{
    if(confirm("Are you sure?")){
      this.bookService.deleteBook(id).subscribe(() =>{
        this.bookService.shouldRefresh.next();
      });
    }
  }

}
