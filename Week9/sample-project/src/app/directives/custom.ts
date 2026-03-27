import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: false,
})
export class Custom {
  constructor(private elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = 'orange';
    elem.nativeElement.innerHTML = '<h1>I was applied dynamically</h1>'
  }
}
