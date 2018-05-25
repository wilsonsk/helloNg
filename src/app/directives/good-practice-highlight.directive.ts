import { OnInit, Directive, Input, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appGoodPracticeHighlight]'
})
export class GoodPracticeHighlightDirective implements OnInit {
  // HOW TO MAKE DYNAMIC
  @Input() defaultColor: string = '';
  @Input('appGoodPracticeHighlight') highlightColor: string = '#00eaff';

  // Even EASIER than Renderer2 - binds a variable to any property of the DOM element the directive is sitting on
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#00eaff');
  }

  // Listen to events on the DOM element the directive is attached to
  @HostListener('mouseenter') mouseover(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#00eaff');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '');
    this.backgroundColor = this.defaultColor;
  }



}
