import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  permitionAdd() {
    let toast = this.toastCtrl.create({
      message: 'Dados Salvos com Sucesso!',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();

    let alert = this.alertCtrl.create({
      title: 'Cadastro',
      message: 'Deseja cadastrar os dados adicionais?',
      buttons: [{
        text: 'NÃO',
        handler: () => {
          this.navCtrl.setRoot(HomePage);
        }
      },{
        text: 'SIM'
      }]
    });
    alert.present();
  }

}
