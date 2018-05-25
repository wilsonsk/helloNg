import { Component, OnInit } from '@angular/core';

import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {
  testNumber: number = 10424;
  testString: string = "This is a test string";
  isDisabled:boolean = true;
  componentCreationStatus: boolean = false;
  componentName: string = 'default';
  attributeDirectiveStatus: string = 'default';
  components = ['Component1'];

  constructor(private testService: TestService) {
    setTimeout(() => {
      this.isDisabled = false;
    }, 2000);
    this.attributeDirectiveStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  getData():string {
    return this.testString;
  }

  onCreateComponent(): void {
    this.components.push(this.componentName + ' created at ' + new Date());
    this.componentCreationStatus = true;
  }

  onUpdateComponentName(event: Event) {
    this.componentName = (<HTMLInputElement>event.target).value;
  }

  getColor(): string {
    return this.attributeDirectiveStatus === 'online' ? '#00eaff' : 'orangered';
  }

}
