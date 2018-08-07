import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import { AuthProvider } from "../../providers/auth/auth";

import { RegistryPage } from '../registry/registry';

import { Auth } from "../../models/auth";

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  auth: Auth;
  signUpForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private fb: FormBuilder, private authProvider: AuthProvider, public toastCtrl: ToastController) {
                this.initialize();
  }

  ionViewDidLoad(){
    this.authProvider.loginSucessEventEmitter.subscribe(
      state => this.navCtrl.setRoot(RegistryPage)
    )
    this.authProvider.loginErrorEventEmitter.subscribe(
      error => this.toast(error)
    )
  }

  private initialize(){
    this.auth = new Auth();
    this.signUpForm = this.fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'confirmPassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  private signUp(form){
    this.authProvider.signUp(this.auth);
  }

  private toast(error) {
    let toast = this.toastCtrl.create({ showCloseButton: true, closeButtonText: 'Ok', position: 'middle' });

      if (error.code == 'auth/email-already-in-use') {
        toast.setMessage('O e-mail já está em uso!');
      } else if (error.code == 'auth/invalid-email') {
        toast.setMessage('O e-mail digitado não é valido!');
      } else if (error.code == 'auth/operation-not-allowed') {
        toast.setMessage('Não está habilitado criar usuário!');
      } else if (error.code == 'auth/weak-password') {
        toast.setMessage('A senha digitada é muito fraca!');
      }
      toast.present();
  }

}
