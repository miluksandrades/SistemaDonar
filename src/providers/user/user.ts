import { EventEmitter, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from "firebase";

import { AuthProvider } from "../auth/auth";

import { User } from "../../models/user";

@Injectable()
export class UserProvider {

  reference;
  loginSucessEventEmitter: EventEmitter<any>;
  loginErrorEventEmitter: EventEmitter<any>;
  logoutEventEmitter: EventEmitter<any>;

  constructor(public http: Http, private authProvider: AuthProvider) {
    this.loginSucessEventEmitter = new EventEmitter();
    this.loginErrorEventEmitter = new EventEmitter();
    this.logoutEventEmitter = new EventEmitter();

    this.initialize();
  }

  private initialize(){
    this.reference = firebase.database().ref('/users/' + this.authProvider.currentUser.uid);
  }

  private callbackSucessLogin(response){
    this.loginSucessEventEmitter.emit(response.state);
  }

  private callbackErrorLogin(error){
    this.loginErrorEventEmitter.emit({code : error.code, message : error.message, email : error.email, credencial : error.credencial});
  }

  saveUser(user: User) {
    let id;
    if (user.id != undefined) {
      id = user.id;
    } else {
      id = this.reference.push().key;
      user.id = id;
    }
    this.reference.child(id).update(user)
      .then(result => this.callbackSucessLogin(result))
      .catch(error => this.callbackErrorLogin(error));
  }

}
