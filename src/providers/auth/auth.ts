import { EventEmitter, Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from "firebase";

import { Auth } from "../../models/auth";

@Injectable()
export class AuthProvider {

  currentUser: any;
  authenticated: boolean;
  loginSucessEventEmitter: EventEmitter<any>;
  loginErrorEventEmitter: EventEmitter<any>;
  logoutSucessEventEmitter: EventEmitter<any>;
  logoutErrorEventEmitter: EventEmitter<any>;
  sucessEventEmitter: EventEmitter<any>;
  errorEventEmitter: EventEmitter<any>;

  constructor(public ngZone: NgZone, public http: Http) {
    this.loginSucessEventEmitter = new EventEmitter();
    this.loginErrorEventEmitter = new EventEmitter();
    this.logoutSucessEventEmitter = new EventEmitter();
    this.logoutErrorEventEmitter = new EventEmitter();
    this.sucessEventEmitter = new EventEmitter();
    this.errorEventEmitter = new EventEmitter();

    firebase.auth().onAuthStateChanged(state => {
      this.callbackStateChange(state);
    })
  }

  private callbackStateChange(state){
    this.ngZone.run( () => {
      if(state == null){
        this.currentUser = null;
        this.authenticated = false;
      }else{
        this.currentUser = state;
        this.authenticated = true;
      }
    })
  }

  private callbackSucessLogin(response){
    this.loginSucessEventEmitter.emit(response.state);
  }

  private callbackErrorLogin(error){
    this.loginErrorEventEmitter.emit({code : error.code, message : error.message, email : error.email, credencial : error.credencial});
  }

  private callbackSucessLogout(response){
    this.logoutSucessEventEmitter.emit(response.state);
  }

  private callbackErrorLogout(error){
    this.logoutErrorEventEmitter.emit({code : error.code, message : error.message, email : error.email, credencial : error.credencial});
  }

  loginWithCredencial(auth: Auth){
    firebase.auth().signInWithEmailAndPassword(auth.email, auth.password)
      .then(result => this.callbackSucessLogin(result))
      .catch(error => this.callbackErrorLogin(error))
  }

  logout(){
    firebase.auth().signOut()
      .then(result => this.callbackSucessLogout(result))
      .catch(error => this.callbackErrorLogout(error));
  }

  signUp(auth: Auth){
    firebase.auth().createUserWithEmailAndPassword(auth.email, auth.password)
      .then(result => this.callbackSucessLogin(result))
      .catch(error => this.callbackErrorLogin(error));
  }

  resetPassword(auth: Auth){
    firebase.auth().sendPasswordResetEmail(auth.email)
      .then(result => this.callbackSucess(result))
      .catch(error => this.callbackError(error))
  }

  private callbackSucess(result){
    this.sucessEventEmitter.emit(result.state);
  }

  private callbackError(error){
    this.errorEventEmitter.emit({code : error.code, message : error.message});
  }
}
