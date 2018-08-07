import { Component, NgZone } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

import { CampaignProvider } from "../../providers/campaign/campaign";

import { BloodCenterPage } from './../blood-center/blood-center';
import { InformationPage } from './../information/information';
import { ProfilePage } from './../profile/profile';

import { Campaign } from "../../models/campaign";

@IonicPage()
@Component({
  selector: 'page-campaign',
  templateUrl: 'campaign.html',
})
export class CampaignPage {

  campaigns: Array<Campaign>;

  constructor(private alertCtrl: AlertController, private navCtrl: NavController, private campaignProvider: CampaignProvider,
              private ngZone: NgZone, public toastCtrl: ToastController, private socialSharing: SocialSharing) {
  }

  ionViewDidLoad(){
    this.campaignProvider.reference.on('value', (snapshot) => {
      this.ngZone.run( () => {
        let innerArray = new Array();
        snapshot.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.campaigns = innerArray;
      })
    })
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
