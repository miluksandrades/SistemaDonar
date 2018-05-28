import { CampaignPage } from './../campaign/campaign';
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

  campaign(){
    this.navCtrl.setRoot(CampaignPage);
  }

  endInst() {
    let alert = this.alertCtrl.create({
      title: 'Instituto Onco-Hematológico de Anápolis',
      subTitle: 'Rua Washington de Carvalho, 155 - St. Central, Anápolis - GO',
      buttons: ['Ok']
    })

    alert.present();

    let directions = { latitude: -16.327995, longitude: -48.950493};

    this.navCtrl.push(MapsPage, { directions });
  }

  endHosp() {
    let alert = this.alertCtrl.create({
      title: 'Hospital de Urgências de Anápolis',
      subTitle: 'Av. Brasil Norte, 3631 - Cidade Universitária, Anápolis - GO',
      buttons: ['Ok']
    })

    alert.present();

    let directions = { latitude: -16.299159, longitude: -48.942058};

    this.navCtrl.push(MapsPage, { directions });
  }

}
