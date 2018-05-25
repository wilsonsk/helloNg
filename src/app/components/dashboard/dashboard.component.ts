import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // newTestElementName: string = '';
  @ViewChild('testElementName') newTestElementNameInput: ElementRef;
  newTestElementContent: string = '';

  @Output() testElementCreatedEvent = new EventEmitter<{testElName: string, testElContent: string}>();
  @Output('bpCreated') bluePrintCreatedEvent = new EventEmitter<{blueprintName: string, blueprintContent: string}>();

  constructor() { }

  ngOnInit() {
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

}
