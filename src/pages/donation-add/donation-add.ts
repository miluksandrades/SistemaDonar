import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ViewController } from 'ionic-angular';

import { DonationProvider } from "../../providers/donation/donation";

import { BloodCenterPage } from '../blood-center/blood-center';
import { CampaignPage } from '../campaign/campaign';
import { DonationPage } from '../donation/donation';
import { InformationPage } from '../information/information';
import { ProfilePage } from './../profile/profile';

import { Donation } from "../../models/donation";

@IonicPage()
@Component({
  selector: 'page-donation-add',
  templateUrl: 'donation-add.html',
})
export class DonationAddPage {

  donation: Donation;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
              public loadCtrl: LoadingController, public donationProvider: DonationProvider) {
                this.initialize();
  }

  private initialize(){
   this.donation = this.navParams.get('donation');
   if(!this.donation){
     this.donation = new Donation();
   }
 }

 saveDonation(){
   this.donationProvider.save(this.donation);
   this.viewCtrl.dismiss();
   this.loadCad();
 }

 loadCad(){
   let loader = this.loadCtrl.create({
     content: "Salvando...",
     dismissOnPageChange: true
   });
   loader.present();
 }

 backPage(){
   this.navCtrl.setRoot(DonationPage);
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
