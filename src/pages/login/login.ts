import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Network } from "@ionic-native/network";

import { AuthProvider } from "../../providers/auth/auth";

import { ProfilePage } from '../profile/profile';
import { ResetPasswordPage } from "../reset-password/reset-password";

import { Auth } from "../../models/auth";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  auth: Auth;
  showPass: boolean;
  type: string;
  loginForm: FormGroup;

  constructor(private navCtrl: NavController, private fb: FormBuilder, private loadingCtrl: LoadingController,
              private authProvider: AuthProvider, private network: Network, private toastCtrl: ToastController) {
                this.initialize();
  }

  ionViewDidLoad() {
    this.authProvider.loginSucessEventEmitter.subscribe(
      state => this.navCtrl.setRoot(ProfilePage)
    )
    this.authProvider.loginErrorEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  private initialize(){
    this.type = 'password';
    this.showPass = true;
    this.auth = new Auth();

    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  login(form) {
    let connectSubscription = this.network.type;

    if (connectSubscription === "none") {
      this.toastCtrl.create({
        message: 'Sem Acesso à Internet',
        showCloseButton: true,
        closeButtonText: 'Ok',
        position: 'middle'
      }).present();
    } else
        if(connectSubscription === "wifi" || connectSubscription === "cellular"){
          this.authProvider.loginWithCredencial(this.auth);
          this.loading();
        }

    this.authProvider.loginWithCredencial(this.auth);
    this.loading();
  }

  loading() {
    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      duration: 2000
    });
    loader.present();
  }

  resetPassword() {
    this.navCtrl.push(ResetPasswordPage);
  }

  showPassword() {
    this.showPass = !this.showPass;

    if(this.showPass){
      this.type = 'password';
    } else {
      this.type = 'text';
    }
  }
}
