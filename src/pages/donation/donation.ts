import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { DonationProvider } from "../../providers/donation/donation";

import { BloodCenterPage } from '../blood-center/blood-center';
import { CampaignPage } from '../campaign/campaign';
import { DonationAddPage } from '../donation-add/donation-add';
import { InformationPage } from '../information/information';
import { ProfilePage } from './../profile/profile';

import { Donation } from "../../models/donation";

@IonicPage()
@Component({
  selector: 'page-donation',
  templateUrl: 'donation.html',
})
export class DonationPage {

  donations: Array<Donation>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public donationProvider: DonationProvider,
              public ngZone: NgZone, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.donationProvider.reference.on('child_removed', (snapshot) => {
      let donationRemoved = snapshot.val();
      this.toastCtrl.create({
        message: 'Doação Removida!',
        duration: 1500
      }).present();
    })

    this.donationProvider.reference.on('value', (snapshot) => {
      this.ngZone.run( () => {
        let innerArray = new Array();
        snapshot.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.donations = innerArray;
      })
    })
  }

  updateDonation(donation: Donation){
    this.navCtrl.push(DonationAddPage, {'donation' : donation});
  }

  insertDonation(){
    this.navCtrl.push(DonationAddPage, {'donation': new Donation()});
  }

  deleteDonation(donation: Donation){
    this.donationProvider.delete(donation).then(
      sucess => console.log('Doação Deletada!')
    ).catch(error => console.log('Não Foi Possível Excluir!'));
  }

  doRefresh(refresher){
    setTimeout(()=>{
      refresher.complete();
    }, 2000);
  }

  home(){
    this.navCtrl.setRoot(ProfilePage);
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
