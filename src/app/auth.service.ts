import { Injectable } from '@angular/core';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public firebaseSignin(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).then(data=>{
      console.log('user dign in success ',email, data)
    }).catch(function(error) {
      console.log('firebase sign in error ',email, error)
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  public firebaseSignup(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password).then(data=>{
      console.log('user signup success ',data);
    }).catch(function(error) {
      console.log('firebase signup error ',error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  public firebaseSignout(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log(" user got signed out");
    }).catch(function(error) {
      console.log('sign out error ',error);
      // An error happened.
    });
  }
}
