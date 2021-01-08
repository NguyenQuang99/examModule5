import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  // @ts-ignore
  bookId : number;
  // @ts-ignore
  message : string;
  isSuccess = false;

  bookform: FormGroup = new FormGroup({
    id: new FormControl(''),
    title : new FormControl(''),
    author : new FormControl(''),
    description: new FormControl('')
  });

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.bookId = params.id;
      this.bookService.getById(this.bookId).subscribe(result =>{
        this.bookform.setValue(result);
      });
    });
  }
  onSubmit(): void{
    if (!this.bookform.invalid){
      this.bookService.updateBook(this.bookform.value).subscribe(result => {
        this.isSuccess = true;
        this.message = 'Updated book information';
      });
    } else {
      this.isSuccess = false;
      this.message = 'Cant update book information!';
    }
  }


}
