import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books = [
    {id: 1, title: '1990', author: 'Peter Pan'},
    {id: 2, title: 'Mary has a little lamb', author: 'James Bond'},
    {id: 3, title: 'WW II documentary', author: 'Jennifer Martin'},
  ];


  getBooks() {
    return this.books;
  }
}
