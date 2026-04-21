import { Component, signal } from '@angular/core';
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

  book = signal<Ibook>({} as Ibook);

  constructor(private route: ActivatedRoute, private bookService: BookService){
    let bookId = this.route.snapshot.paramMap.get('bookId');
    this.bookService.getBook(parseInt(bookId!)).subscribe(result => {
      this.book.set(result);
    });
  }
}
