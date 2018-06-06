import { BloodCenterPage } from './../blood-center/blood-center';
import { InformationPage } from './../information/information';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { messaging } from 'firebase';

@IonicPage()
@Component({
  selector: 'page-campaign',
  templateUrl: 'campaign.html',
})
export class CampaignPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public socialSharing: SocialSharing) {
  }

  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  compartilhar() {
    this.socialSharing.shareViaWhatsApp('Campanha', 'google.com').then(() => {
      console.log('deu certo');
    }).catch(() => {
      console.log('teste deu erro');
    })

    this.socialSharing.shareViaInstagram('Campanha', 'google.com').then(() => {
      console.log('deu certo');
    }).catch(() => {
      console.log('teste deu erro');
    })

    this.socialSharing.shareViaFacebook('Campanha', 'google.com').then(() => {
      console.log('deu certo');
    }).catch(() => {
      console.log('teste deu erro');
    })
  }

  home() {
    this.navCtrl.setRoot(ProfilePage);
  }

  informations() {
    this.navCtrl.setRoot(InformationPage);
  }

  bloodCenter() {
    this.navCtrl.setRoot(BloodCenterPage);
  }

}
