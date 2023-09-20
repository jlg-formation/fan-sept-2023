import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements OnInit {
  constructor(public elt: ElementRef<HTMLInputElement>) {}

  ngOnInit(): void {
    this.elt.nativeElement.select();
  }
}
