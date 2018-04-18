import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformacoesPage } from '../informacoes/informacoes';
import { HemocentroPage } from '../hemocentro/hemocentro';

@IonicPage()
@Component({
  selector: 'page-donation-add',
  templateUrl: 'donation-add.html',
})
export class DonationAddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  doRefresh(refresher){
    setTimeout(()=>{
      refresher.complete();
    }, 2000);
  }

  home(){
    this.navCtrl.setRoot(PerfilPage);
  }

  informacoes(){
    this.navCtrl.setRoot(InformacoesPage);
  }

  hemocentro(){
    this.navCtrl.setRoot(HemocentroPage);
  }


}
