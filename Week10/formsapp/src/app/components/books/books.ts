import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book-service';
import { Ibook } from '../../interfaces/ibook';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books implements OnInit {

  books: Ibook[];

  constructor(private service: BookService){
    this.books = service.getBooks();
  }

  ngOnInit(): void {
    console.log('Component created');
  }

  deleteBook(bookId: number){
    // Find the array index
    const arrIndex = this.books.findIndex(b => b.id === bookId);

    // Delete the book from the array
    this.books.splice(arrIndex, 1);

    alert('Book was deleted successfully.');
  }
}
