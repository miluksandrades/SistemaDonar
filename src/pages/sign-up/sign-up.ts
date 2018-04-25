import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';

import { AuthProvider } from './../../providers/auth/auth';

import { RegistryPage } from '../registry/registry';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  //user: User = new User();

  //@ViewChild('form') form: NgForm;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, public toastCtrl: ToastController, private authProvider: AuthProvider) {
  }
/*
  signUp() {
    if(this.form.form.valid){

      //let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});

      this.authProvider.createUser(this.user)
      .then((user: any) => {

        user.sendEmailVerification(); //Confirmar e-mail do usuário

        //toast.setMessage('Usuário criado com Sucesso!');
        //toast.present();

        this.navCtrl.setRoot(RegistryPage);

      }).catch((error: any) => {
        if(error.code == 'auth/email-already-in-use'){
          toast.setMessage('O e-mail já está em uso!');
        } else if (error.code == 'auth/invalid-email'){
          toast.setMessage('O e-mail digitado não é valido!');
        } else if (error.code == 'auth/operation-not-allowed'){
          toast.setMessage('Não está habilitado criar usuário!');
        } else if (error.code == 'auth/weak-password'){
          toast.setMessage('A senha digitada é muito fraca!');
        }
        toast.present();
      });
    }
  }*/
}
