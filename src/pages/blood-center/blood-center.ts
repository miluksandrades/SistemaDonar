import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { BloodCenterProvider } from "../../providers/blood-center/blood-center";

import { CampaignPage } from './../campaign/campaign';
import { InformationPage } from './../information/information';
import { MapsPage } from './../maps/maps';
import { ProfilePage } from './../profile/profile';

import { BloodCenter } from "../../models/blood-center";

@IonicPage()
@Component({
  selector: 'page-blood-center',
  templateUrl: 'blood-center.html',
})
export class BloodCenterPage {

  centers: Array<BloodCenter>;

  constructor(private navCtrl: NavController, private bloodCenterProvider: BloodCenterProvider,
              private ngZone: NgZone, public toastCtrl: ToastController) {
  }

  ionViewDidLoad(){
    this.bloodCenterProvider.reference.on('value', (snapshot) => {
      this.ngZone.run( () => {
        let innerArray = new Array();
        snapshot.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.centers = innerArray;
      })
    })
  }

  home(){
    this.navCtrl.setRoot(ProfilePage);
  }

  informations(){
    this.navCtrl.setRoot(InformationPage);
  }

  campaigns() {
    this.navCtrl.setRoot(CampaignPage);
  }

  getDirections(bloodCenter: BloodCenter){
    this.navCtrl.push(MapsPage, { 'bloodCenter': bloodCenter});
  }

}
