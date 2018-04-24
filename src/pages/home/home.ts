import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignUpPage } from './../sign-up/sign-up';
import { AuthPage } from './../auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imageArray: any = {};

  constructor(public navCtrl: NavController) {
    this.imageArray = [
      {'image': 'assets/imgs/slide1.png'},
      {'image': 'assets/imgs/slide2.png'},
      {'image': 'assets/imgs/slide3.png'}
    ]
  }

  signUp(){
    this.navCtrl.setRoot(SignUpPage);
  }

  Auth(){
    this.navCtrl.setRoot(AuthPage);
  }
}
