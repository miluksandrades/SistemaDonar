import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";

import { AuthProvider } from "../../providers/auth/auth";

import { HomePage } from './../home/home';

import { Auth } from "../../models/auth";

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  auth: Auth;
  resetPass: FormGroup;

  constructor(private navCtrl: NavController, private navParams: NavParams,
              private authProvider: AuthProvider, public fb: FormBuilder) {
    this.initialize();
  }

  ionViewDidLoad(){
    this.authProvider.sucessEventEmitter.subscribe(
      state => this.navCtrl.setRoot(HomePage)
    )
    this.authProvider.errorEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  private initialize(){
    this.auth = new Auth();
    this.resetPass = this.fb.group({
      'email': ['', Validators.required]
    });
  }

  reset(){
    this.authProvider.resetPassword(this.auth);
  }
}
