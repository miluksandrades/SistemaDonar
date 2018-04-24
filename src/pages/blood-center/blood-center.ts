import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InformationPage } from './../information/information';
import { ProfilePage } from './../profile/profile';

@IonicPage()
@Component({
  selector: 'page-blood-center',
  templateUrl: 'blood-center.html',
})
export class BloodCenterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  home(){
    this.navCtrl.setRoot(ProfilePage);
  }

  informations(){
    this.navCtrl.setRoot(InformationPage);
  }

}
