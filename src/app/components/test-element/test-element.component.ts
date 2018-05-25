import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  onButton() {
    // activatedRoute is the currently activated route - aka the route that loaded this component
    this.router.navigate(['/2', 10, 'edit'], {relativeTo: this.activatedRoute, queryParams: {testQueryParam: 'myQueryParam'}, fragment: 'loading'});
  }

  ngOnInit() {
  }

}
