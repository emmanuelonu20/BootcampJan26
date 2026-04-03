import { Component } from '@angular/core';
import { BookService } from '../../services/book-service';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {

  books;

  constructor(private service: BookService){
    this.books = service.getBooks();
  }
}
