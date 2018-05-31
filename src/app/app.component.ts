import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  testElements = [{type:"test-element", name: "testName", content: "testContent"}];
  loadedFeature = 'recipes';

  accounts: {name:string, status:string}[] = [];

  testSubscription1: Subscription;
  testSubscription2: Subscription;

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.accounts = this.testService.accounts;

    // Test basic Observable
    // USE pipe() for rxjs operators
    // const testObervable1 = interval(1000).pipe(map((data:number) => {
    //  return data * 2;
    // });)
    // this.testSubscription1 = testObervable1.subscribe((data) => {
    //   console.log(data);
    // });
    //
    // // Test custom Observable
    // const testObervable2 = Observable.create((observer:Observer<string>) => {
    //   setTimeout(() => {
    //     observer.next('first package');
    //   },2000);
    //   setTimeout(() => {
    //     observer.next('second package');
    //   },4000);
    //   // setTimeout(() => {
    //   //   observer.error('intentional error');
    //   // },5000);
    //   setTimeout(() => {
    //     observer.complete();
    //   },7000);
    // });
    //
    // this.testSubscription2= testObervable2.subscribe(
    //   (data:string) => {
    //     console.log(data);
    //   },
    //   (error:string) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log('completed');
    //   }
    // );
  }

  ngOnDestroy() {
    this.testSubscription1.unsubscribe();
    this.testSubscription2.unsubscribe();
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
