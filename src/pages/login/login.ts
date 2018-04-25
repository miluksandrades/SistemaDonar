import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Network } from "@ionic-native/network";

import { AuthProvider } from './../../providers/auth/auth';

import { ProfilePage } from '../profile/profile';
import { ResetPasswordPage } from "../reset-password/reset-password";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;
  auth: any;

  loginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder,
    private authProvider: AuthProvider, public loadingCtrl: LoadingController, public network: Network,
    public toastCtrl: ToastController) {
      this.auth = this.navParams.data.auth || {};
      this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      email: [this.auth.email, Validators.required],
      password: [this.auth.password, Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  login() {
    let connectSubscription = this.network.type;
    let data = this.loginForm.value;

    let credentials = {
      email: data.email,
      password: data.password
    };

    if (connectSubscription === "none") {
      this.toastCtrl.create({
        message: 'Sem Acesso à Internet',
        showCloseButton: true,
        closeButtonText: 'Ok',
        position: 'middle'
      }).present();
    } else
      if (connectSubscription === "wifi" || connectSubscription === "cellular") {
        this.authProvider.loginWithEmail(credentials)
          .then(() => this.navCtrl.setRoot(ProfilePage));
        this.loading();
      }
  }

  loading() {
    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      dismissOnPageChange: true
    });
    loader.present();
  }

  resetPassword() {
    this.navCtrl.push(ResetPasswordPage);
  }

  profile() {
    this.navCtrl.setRoot(ProfilePage);
  }

}
