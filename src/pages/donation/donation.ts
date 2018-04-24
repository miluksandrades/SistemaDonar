import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from './../profile/profile';
import { InformationPage } from '../information/information';
import { BloodCenterPage } from '../blood-center/blood-center';

@IonicPage()
@Component({
  selector: 'page-donation',
  templateUrl: 'donation.html',
})
export class DonationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  doRefresh(refresher){
    setTimeout(()=>{
      refresher.complete();
    }, 2000);
  }

  home(){
    this.navCtrl.setRoot(ProfilePage);
  }

  information(){
    this.navCtrl.setRoot(InformationPage);
  }

  bloodCenter(){
    this.navCtrl.setRoot(BloodCenterPage);
  }

}
