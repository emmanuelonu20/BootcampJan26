import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book-service';
import { Ibook } from '../../interfaces/ibook';

@Component({
  selector: 'app-book-item',
  standalone: false,
  templateUrl: './book-item.html',
  styleUrl: './book-item.css',
})
export class BookItem {

  book: Ibook;

  constructor(private route: ActivatedRoute, private bookService: BookService){
    let bookId = this.route.snapshot.paramMap.get('bookId');
    this.book = this.bookService.getBook(parseInt(bookId!))!;
  }
}
