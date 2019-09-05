import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, AbstractControl } from '@angular/forms';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const systexNumber2 = (min: number, max: number) => {
  return (control: AbstractControl) => {
    const val = +control.value;
    if (!val) {
      return { systexNumber: true };
    }

    if (val > min && val < max) {
      return null;
    }

    return { systexNumber: true };
  };
};

const systexNumber = (control: AbstractControl) => {
  const val = +control.value;
  if (!val) {
    return { systexNumber: true };
  }

  if (val > 0 && val < 10) {
    return null;
  }

  return { systexNumber: true };
};

const emailExist = (httpClient: HttpClient) => (control: AbstractControl) => {
  return httpClient
    .get<{ result: boolean }>('/api?email=' + control.value)
    .pipe(
      map(result => (result ? null : { emailExist: true }))
    );

  return of({ emailExist: true });
  // return of(null);
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  cusomizeValidator = Validators.compose([Validators.required, Validators.minLength(8)]);

  firstNameControl = new FormControl('test', this.cusomizeValidator);

  interestArray = new FormArray([new FormControl('HTML'), new FormControl('CSS'), new FormControl('Angular')]);

  form = new FormGroup({
    user: new FormGroup({
      firstName: this.firstNameControl,
      lastName: new FormControl('demo', this.cusomizeValidator)
    }),
    interest: this.interestArray,
    email: new FormControl(null, null, emailExist(this.httpClient)),
    password: new FormControl(),
    age: new FormControl(0, systexNumber2(0, 10))
  });

  form2 = this.fb.group({
    name: this.fb.control('test', Validators.required)
  });

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit() {
    // this.form.get('user.firstName');
    // this.interestArray.controls
    console.log(this.form.value);

    this.form.get('email').setValue('aaa@com');

    this.form.patchValue({
      user: {
        firstName: 'abcd'
      }
    });

    this.form.reset({});

    this.form.valueChanges.subscribe(data => {
      console.log(data);
    });

    this.form
      .get('email')
      .valueChanges.pipe(switchMap(email => /* 呼叫 API */ of(true)))
      .subscribe(exist => {
        this.form.get('email').setErrors({ emailExist: true });
      });
  }

  addInterest() {
    this.interestArray.push(new FormControl());
  }

  register() {

    if(this.form.valid) {
      //
    }

    console.log(this.form.value);
  }
}
