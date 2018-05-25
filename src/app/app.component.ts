import { Component, OnInit } from '@angular/core';

import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  testElements = [{type:"test-element", name: "testName", content: "testContent"}];
  loadedFeature = 'recipes';

  accounts: {name:string, status:string}[] = [];

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.accounts = this.testService.accounts;
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onTestElementAdded(testElementData: {testElName: string, testElContent: string}) {
    this.testElements.push({
      type:'test-element',
      name: testElementData.testElName,
      content: testElementData.testElContent
    });
  }

  onBluePrintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
    this.testElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }

}
