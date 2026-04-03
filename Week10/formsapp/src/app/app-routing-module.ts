import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksForm } from './components/books-form/books-form';
import { Books } from './components/books/books';
import { BookItem } from './components/book-item/book-item';
import { NotFound } from './components/not-found/not-found';

const routes: Routes = [
  {path: 'create-book', component: BooksForm},
  {path: 'books', component: Books},
  {path: 'view-book/:bookId', component: BookItem},
  {path: '**', component: NotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
