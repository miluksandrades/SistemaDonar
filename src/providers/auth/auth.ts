import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
//import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthProvider {

  private user: firebase.User;

  constructor(private afAuth: AngularFireAuth) {
    //this.user = angularFireAuth.authState;

    afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  loginWithEmail(credentials){
    console.log('Login com E-mail');
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  /*createUser(user: user){
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }*/

}
