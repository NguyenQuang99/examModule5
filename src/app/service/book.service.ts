import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:3000/books';
  shouldRefresh = new Subject<any>();

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.API_URL);
  }
  getById(id: number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.API_URL}/${id}`);
  }
  createBook(book: Book): Observable<Book>{
    return this.httpClient.post<Book>(this.API_URL, book);
  }
  deleteBook(id: number): Observable<any>{
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }
  updateBook(book: Book): Observable<any>{
    return this.httpClient.put<Book>(`${this.API_URL}/${book.id}`, book);
  }





}
