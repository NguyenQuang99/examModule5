import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  // @ts-ignore
  bookId: number;
  // @ts-ignore
  message: string;
  isSuccess = false;

  bookform: FormGroup = new FormGroup({
    id: new FormControl(''),
    title : new FormControl(''),
    author : new FormControl(''),
    description: new FormControl('')
  });

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.bookId = params.id;
      this.bookService.getById(this.bookId).subscribe(result =>{
        this.bookform.setValue(result);
      });
    });
  }
  onSubmit(): void{
    if(!this.bookId){
      this.bookService.createBook(this.bookform.value).subscribe(result =>{
        this.message = 'Created new book!';
        this.isSuccess = true;
        this.bookService.shouldRefresh.next('Do sth');
      })
    } else {
      this.isSuccess = false;
      this.message = "Don't create new book";
    }
  }

}
