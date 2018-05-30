import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  // newTestElementName: string = '';
  @ViewChild('testElementName') newTestElementNameInput: ElementRef;
  newTestElementContent: string = '';

  @Output() testElementCreatedEvent = new EventEmitter<{testElName: string, testElContent: string}>();
  @Output('bpCreated') bluePrintCreatedEvent = new EventEmitter<{blueprintName: string, blueprintContent: string}>();

  testPathParam: {id:number, myVar:string};
  paramsSubscription: Subscription;

  myQueryParams = {};
  myFrag = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.testPathParam = {
      myVar: this.activatedRoute.snapshot.params['myVar'],
      id: this.activatedRoute.snapshot.params['id']
    };
    this.paramsSubscription = this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.testPathParam.id = params['id'];
          this.testPathParam.myVar = params['myVar'];
        }
      );

    this.activatedRoute.queryParams.subscribe((data) => {

    });
    this.activatedRoute.fragment.subscribe((data) => {

    });
  }

  onAddTestElement(nameInput: HTMLInputElement) {
    this.testElementCreatedEvent.emit({
      testElName: nameInput.value,
      testElContent: this.newTestElementContent
    });
  }

  onAddBluePrint() {
    this.bluePrintCreatedEvent.emit({
      blueprintName: this.newTestElementNameInput.nativeElement.value,
      blueprintContent: this.newTestElementContent
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
