import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
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

// Template driven form
  @ViewChild('f') signupForm: NgForm;
  answer:string = '';
  defaultEmail:string = 'default@email.com';
  radioButtonValues = ['value1', 'value2', 'value3'];
  user = {
    name: '',
    email: '',
    answer: '',
    radio: ''
  }
  submitted:boolean = false;

  // Reactive form
  reactiveForm: FormGroup;
  // testu custom validator
  forbiddenNames: ['Superuser', 'root'];

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

    // Reactive form init - NEEDS TO BE RENDERED BE FOR TEMPLATE IS RENDERED
    // this.reactiveForm = new FormGroup({
    //   // controls are key/value pairs
    //   // 'name': new FormControl(null, Validators.required),
    //   // 'email': new FormControl(null, [Validators.required, Validators.email]),
    //   // 'radio': new FormControl('value1')
    //   'userData': new FormGroup({
    //     'name': new FormControl(null, [Validators.required]),
    //     'email': new FormControl(null, [Validators.required, Validators.email], this.checkEmails.bind(this)),
    //     'radio': new FormControl('value1')
    //   }),
    //   'hobbies': new FormArray([]),
    // });
    this.reactiveForm = new FormGroup({
      'userData': new FormGroup({
        'name': new FormControl(null, [Validators.required]),
        // 'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
        'hobbies': new FormArray([])
      })
    });
    // this.reactiveForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.reactiveForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    // this.reactiveForm.setValue({
    //   'userData': {
    //     'name': 'Max',
    //     'email': 'max@test.com',
    //     'hobbies': ['']
    //   }
    // });
    this.reactiveForm.patchValue({
      'userData': {
        'name': 'Anna',
      }
    });

  }

  onReactiveSubmit() {
    console.log(this.reactiveForm);
    this.reactiveForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.reactiveForm.get('hobbies')).push(control);
  }

  // checkForbiddenNames(control: FormControl): {[s: string]: boolean} {
  //   if(this.forbiddenNames.indexOf(control.value) !== -1) {
  //     return {'nameIsForbidden': true};
  //   }
  //   return null;
  // }

  checkEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com') {
          resolve({'email is forbidden': true});
        } else {
          resolve(null);
        }
      },2000);
    });
    return promise;
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

  // TEST Forms
  // 1
  // onSubmit(form: ElementRef) {
  //   console.log(form);
  // }
  // 2
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  //
  onSubmit() {
    this.submitted = true;
    this.user.name = this.signupForm.value.testFormGroup.name;
    this.user.email = this.signupForm.value.testFormGroup.email;
    this.user.answer = this.signupForm.value.testFormGroup.questionAnswer;
    this.user.radio = this.signupForm.value.testFormGroup.radioTest;
    console.log(this.signupForm.value.testFormGroup);

    // reset form values and state/classes - you can maintain current values by passing same object as passed in setValue()
    this.signupForm.reset();
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // Overrides all values
    // this.signupForm.setValue({
    //   testFormGroup: {
    //     name: suggestedName,
    //     email: '',
    //     questionAnswer: 'df',
    //     radioTest: 'value1'
    //   }
    // });

    // Prevents overriding of current values via patch
    this.signupForm.form.patchValue({
      testFormGroup: {
        name: suggestedName
      }
    })
  }
}
