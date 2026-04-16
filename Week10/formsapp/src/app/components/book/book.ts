import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Ibook } from '../../interfaces/ibook';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book implements OnChanges { 
  @Input() book!: Ibook; // Parent -> Child data transfer
  @Output() deleteBookEvent = new EventEmitter(); //Child to Parent data transfer

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['book'].previousValue)
    console.log(changes['book'].currentValue)
  }

  onDelete(){
    if (confirm('Are you sure you want to delete ' + this.book.title + '?')){
      this.deleteBookEvent.emit(this.book.id); // trigger our custom event and send the book ID along to the parent
    }
  }
}
