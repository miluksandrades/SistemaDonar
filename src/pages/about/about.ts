import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BloodCenterPage } from './../blood-center/blood-center';
import { CampaignPage } from './../campaign/campaign';
import { HomePage } from './../home/home';
import { InformationPage } from '../information/information';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
