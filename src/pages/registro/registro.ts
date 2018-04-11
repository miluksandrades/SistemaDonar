import { FilePath } from '@ionic-native/file-path';
import { FileChooser } from '@ionic-native/file-chooser';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  nativepath: any;

  constructor(private fileChooser: FileChooser, public navCtrl: NavController,public alertCtrl: AlertController,public toastCtrl: ToastController, public navParams: NavParams, public loadCtrl: LoadingController) {
  }

  saveLoading(){
    let load = this.loadCtrl.create({
      content: 'Salvando...',
      duration: 3000
    })
    load.present();
  }
}
