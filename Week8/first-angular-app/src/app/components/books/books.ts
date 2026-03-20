import { Component } from '@angular/core';
import { BooksService } from '../../services/books-service';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  //properties
  libraryName = "Robogarden Library";
  books;

  //constructor
  constructor(private service: BooksService) {
    this.books = service.getBooks();
  }

  //method
}
