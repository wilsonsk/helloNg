import { OnInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHightlight]'
})
export class BasicHighlightDirective implements OnInit{
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // Not good practice to directly modify DOM elements like the following
    this.elementRef.nativeElement.style.backgroundColor = 'orangered';

    // Instead use Renderer - See good-practice-highlight.directive.ts
  }
}
