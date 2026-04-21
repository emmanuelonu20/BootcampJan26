import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BooksForm } from './components/books-form/books-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Books } from './components/books/books';
import { BookItem } from './components/book-item/book-item';
import { NotFound } from './components/not-found/not-found';
import { Book } from './components/book/book';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [App, BooksForm, Books, BookItem, NotFound, Book],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
