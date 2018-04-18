import { InformacoesPage } from './../informacoes/informacoes';
import { PerfilPage } from './../perfil/perfil';
import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HemocentroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hemocentro',
  templateUrl: 'hemocentro.html',
})
export class HemocentroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  home(){
    this.navCtrl.setRoot(PerfilPage);
  }

  informacoes(){
    this.navCtrl.setRoot(InformacoesPage);
  }
}
