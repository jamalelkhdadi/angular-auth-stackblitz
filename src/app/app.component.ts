import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service'

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {
    firebase.initializeApp(environment);
     }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signout(){
    this.auth.firebaseSignout();
  }

  signup(){
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;
    this.auth.firebaseSignup(username, password);
  }

  onSubmit() {
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;
    this.auth.firebaseSignin(username, password);
  }
}
