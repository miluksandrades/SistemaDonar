import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { InformationPage } from './../information/information';
import { ProfilePage } from './../profile/profile';
import { MapsPage } from './../maps/maps';

@IonicPage()
@Component({
  selector: 'page-blood-center',
  templateUrl: 'blood-center.html',
})
export class BloodCenterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  home(){
    this.navCtrl.setRoot(ProfilePage);
  }

  informations(){
    this.navCtrl.setRoot(InformationPage);
  }

  campaigns() {
    this.navCtrl.setRoot(ProfilePage);
  }

  endInst() {
    /*let alert = this.alertCtrl.create({
      title: 'Instituto Onco-Hematológico de Anápolis',
      subTitle: 'Rua Washington de Carvalho, 155 - St. Central, Anápolis - GO',
      buttons: ['Voltar']
    })

    alert.present();*/

    this.navCtrl.setRoot(MapsPage);
  }

  endHosp() {
    /*let alert = this.alertCtrl.create({
      title: 'Hospital de Urgências de Anápolis',
      subTitle: 'Av. Brasil Norte, 3631 - Cidade Universitária, Anápolis - GO',
      buttons: ['Voltar']
    })

    alert.present();*/

    this.navCtrl.setRoot(MapsPage);
  }

}
