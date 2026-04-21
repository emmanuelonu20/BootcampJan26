import { Injectable } from '@angular/core';
import { Ibook } from '../interfaces/ibook';
import { HttpClient } from '@angular/common/http';
import { Igenre } from '../interfaces/igenre';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  constructor(private http: HttpClient) {

  }
  

  getBooks(){
    return this.http.get<Ibook[]>('http://localhost:3000/books');
  }

  getBook(bookId: number) {
    return this.http.get<Ibook>('http://localhost:3000/books/' + bookId);
  }

  getGenres(){
    return this.http.get<Igenre[]>('http://localhost:3000/genres');
  }

  createBook(book: any){
    return this.http.post<Ibook>('http://localhost:3000/books', book);
  }

  deleteBook(bookId: number) {
    return this.http.delete<Ibook>('http://localhost:3000/books/' + bookId);
  }
}
