import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { avoidWord, prohibited } from '../../custom-validation';

@Component({
  selector: 'app-books-form',
  standalone: false,
  templateUrl: './books-form.html',
  styleUrl: './books-form.css',
})
export class BooksForm {

  booksForm; //form group


  constructor(private fb: FormBuilder){
    this.booksForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), avoidWord, prohibited(/admin/), prohibited(/john/)]],   //form control
      author: ['', [Validators.required, avoidWord]], //form control
      genre: ['', [Validators.required]], //form control
      author_email: ['', [Validators.required, Validators.email]] //form control
    });
  }

  onSubmit() {
    console.log(this.booksForm.value);
  }

  // Getters
  get titleFormControl(){
    return this.booksForm.get('title')!;
  }

  get authorFormControl(){
    return this.booksForm.get('author')!;
  }

  get genreFormControl(){
    return this.booksForm.get('genre')!;
  }

  get authorEmailFormControl(){
    return this.booksForm.get('author_email')!;
  }

}
