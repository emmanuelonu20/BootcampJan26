import { Injectable } from '@angular/core';
import { Ibook } from '../interfaces/ibook';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Ibook[] = [
    {id: 1, title: 'How to get rich in 2 days', author: 'Peter Pan', author_email: 'peter.pan@gmail.com', genre: 'action'},
    {id: 2, title: 'Love is blind', author: 'James Bond', author_email: 'james.bond@gmail.com', genre: 'romance'},
    {id: 3, title: 'Leadership by example', author: 'Jennifer Lopez', author_email: 'jennifer@gmail.com', genre: 'thriller'},
  ];

  getBooks(){
    return this.books;
  }

  getBook(bookId: number) {
    return this.books.find(book => book.id === bookId); //return a single book
  }
}
