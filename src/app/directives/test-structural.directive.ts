import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// INPUT name aka the property being binded - must have the same name as the directive
// because the directive is converted into a property
@Directive({
  selector: '[appTestStructural]'
})
export class TestStructuralDirective {
  // keyword set - setter function of property - INPUT IS STILL A PROPERTY NOT A FUNCTION
  // unless gets value the property would normally get as an input
  @Input() set appTestStructural(condition: boolean) {
    if(!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  // vcRef - is the marker of the place where we placed this directive in the DOM
  // templateRef - is the conditional template upon which this directive sits
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
