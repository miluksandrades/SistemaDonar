import { HemocentroPage } from './../hemocentro/hemocentro';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PergFreqPage } from '../perg-freq/perg-freq';
import { DoaRecPage } from '../doa-rec/doa-rec';

/**
 * Generated class for the InformacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacoes',
  templateUrl: 'informacoes.html',
})
export class InformacoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  pergFreg(){
    this.navCtrl.push(PergFreqPage);
  }

  doaRec(){
    this.navCtrl.push(DoaRecPage);
  }

  home() {
    this.navCtrl.setRoot(PerfilPage);
  }

  hemocentro() {
    this.navCtrl.setRoot(HemocentroPage);
  }

  

}
