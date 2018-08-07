import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { BloodCenterPage } from './../blood-center/blood-center';
import { CampaignPage } from './../campaign/campaign';
import { HomePage } from './../home/home';
import { InformationPage } from '../information/information';

@IonicPage()
@Component({
  selector: 'page-exams',
  templateUrl: 'exams.html',
})
export class ExamsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController) {
  }

  home(){
    this.navCtrl.setRoot(HomePage);
  }

  informations(){
    this.navCtrl.setRoot(InformationPage);
  }

  bloodCenter(){
    this.navCtrl.setRoot(BloodCenterPage);
  }

  campaigns(){
    this.navCtrl.setRoot(CampaignPage);
  }

  successDownload(){
    let toast = this.toast.create({
      message: 'Download realizado com sucesso',
      duration: 2000
    });

    toast.present();
  }

}
