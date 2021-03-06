import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {BookService} from "../service/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
   // @ts-ignore
  book: Book;
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.getById(id).subscribe(
      next => (this.book = next),
      error => {
        console.log(error);
        // @ts-ignore
        this.book = null;
      }
    );
  }

}
