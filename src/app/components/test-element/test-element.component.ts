import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test-element',
  templateUrl: './test-element.component.html',
  styleUrls: ['./test-element.component.scss']
})
export class TestElementComponent implements OnInit {
// To expose a component's property to other components add the @Input decorator
// Put string in constructor of input to provide an alias instead of the actual name
  @Input('testElement') element: {
    type:string,
    name:string,
    content:string
  };

  // how to access DOM of ng-content - ContentChild
  @ContentChild('testingProjectingRef') projectedContent: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
