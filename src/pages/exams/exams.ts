import { CampaignPage } from './../campaign/campaign';
import { BloodCenterPage } from './../blood-center/blood-center';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { InformationPage } from '../information/information';

/**
 * Generated class for the ExamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  campaign(){
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
