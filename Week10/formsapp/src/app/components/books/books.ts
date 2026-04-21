import { Component, OnInit, signal } from '@angular/core';
import { BookService } from '../../services/book-service';
import { Ibook } from '../../interfaces/ibook';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books implements OnInit {

  books = signal<Ibook[]>([]);

  constructor(private service: BookService){
    service.getBooks().subscribe(result => {
      this.books.set(result);
    });
  }

  ngOnInit(): void {
    console.log('Component created');
  }

  deleteBook(bookId: number){
    // Find the array index
    const arrIndex = this.books().findIndex(b => b.id === bookId);

    // Delete the book from the array
    this.books().splice(arrIndex, 1);

    // Delete from DB
    this.service.deleteBook(bookId).subscribe(result => {});

    alert('Book was deleted successfully.');
  }
}
