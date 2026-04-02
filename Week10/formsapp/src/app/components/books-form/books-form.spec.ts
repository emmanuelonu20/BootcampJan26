import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksForm } from './books-form';

describe('BooksForm', () => {
  let component: BooksForm;
  let fixture: ComponentFixture<BooksForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksForm],
    }).compileComponents();

    fixture = TestBed.createComponent(BooksForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
