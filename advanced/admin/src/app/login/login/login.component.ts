import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('emailInput', { static: true }) emailInput: NgModel;
  @ViewChild('form', { static: true}) form: NgForm;

  email = 'test';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {

    console.log(this.emailInput);

  }

  login() {
    console.log(this.emailInput.value);

  }

  submit(event: NgForm) {
    console.log(event);

    this.httpClient.post('/api', event.value ).subscribe(_ => {

    });
  }
}
