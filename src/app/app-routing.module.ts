import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookCreateComponent} from "./book-create/book-create.component";
import {BookEditComponent} from "./book-edit/book-edit.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookComponent} from "./book/book.component";

const routes: Routes = [
  {
    path:'',redirectTo: 'books', pathMatch: 'full'
  },
  {
    path: 'books',
    component: BookComponent
  },
  {
    path: 'books/create',
    component: BookCreateComponent,
  },
  {
    path: 'books/edit/:id',
    component: BookEditComponent
  },
  {
    path: 'books/detail/:id',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
