import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BloodCenterPage } from './../blood-center/blood-center';
import { ProfilePage } from './../profile/profile';
import { DoubtsPage } from '../doubts/doubts';
import { TransfusionPage } from '../transfusion/transfusion';

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  doubts(){
    this.navCtrl.push(DoubtsPage);
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

}
