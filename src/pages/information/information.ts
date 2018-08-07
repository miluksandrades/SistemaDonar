import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutPage } from './../about/about';
import { BloodCenterPage } from './../blood-center/blood-center';
import { CampaignPage } from './../campaign/campaign';
import { ProfilePage } from './../profile/profile';
import { TransfusionPage } from '../transfusion/transfusion';
import { QuestionsPage } from '../questions/questions';

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  about(){
    this.navCtrl.push(AboutPage);
  }

  doubts(){
    this.navCtrl.push(QuestionsPage);
  }

  transfusion(){
    this.navCtrl.push(TransfusionPage);
  }

  home() {
    this.navCtrl.setRoot(ProfilePage);
  }

  bloodCenter() {
    this.navCtrl.setRoot(BloodCenterPage);
  }

  campaigns(){
    this.navCtrl.setRoot(CampaignPage);
  }

}
