import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  constructor() { }

  @HostListener('click') toggleOpen(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#00eaff');
    this.isOpen = !this.isOpen;
  }

}
