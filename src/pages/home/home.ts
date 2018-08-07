import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

import { SignUpPage } from '../sign-up/sign-up';
import { LoginPage } from '../login/login';

//import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imageArray: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public facebook: Facebook) {
    this.imageArray = [
      {'image': 'assets/imgs/slide1.png'},
      {'image': 'assets/imgs/slide2.png'},
      {'image': 'assets/imgs/slide3.png'}
    ]
  }

  signUp(){
    this.navCtrl.push(SignUpPage);
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  // fbLogin(){
  //   this.facebook.login(['email']).then( (response) => {
  //     const facebookCredential = firebase.auth.FacebookAuthProvider
  //       .credential(response.authResponse.accessToken);
  //
  //       firebase.auth().signInWithCredential(facebookCredential)
  //         .then((success) => {
  //           console.log("Firebase success: " + JSON.stringify(success));
  //           this.navCtrl.setRoot(ProfilePage);
  //           this.userProfile = success;
  //         })
  //         .catch((error) => {
  //           console.log("Firebase failure: " + JSON.stringify(error));
  //       });
  //     }).catch((error) => { console.log(error) });
  //   }
  // }
}
