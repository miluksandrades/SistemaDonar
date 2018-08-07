import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { UserProvider } from "../../providers/user/user";
import { AuthProvider } from "../../providers/auth/auth";

import { BloodCenterPage } from './../blood-center/blood-center';
import { CampaignPage } from './../campaign/campaign';
import { DonationPage } from './../donation/donation';
import { ExamsPage} from './../exams/exams';
import { HomePage } from './../home/home';
import { InformationPage } from './../information/information';
import { RegistryPage } from './../registry/registry';

import { User } from "../../models/user";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  users: Array<User>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider,
              private toast: ToastController, private ngZone: NgZone, private userProvider: UserProvider) {
  }

  ionViewDidLoad(){
    this.userProvider.reference.on('value', (snapshot) => {
      this.ngZone.run(() => {
        let innerArray = new Array ();
        snapshot.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.users = innerArray;
      })
    })

    this.authProvider.logoutSucessEventEmitter.subscribe(
      state => this.navCtrl.setRoot(HomePage)
    )
    this.authProvider.logoutErrorEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  updateUser(user: User){
    this.navCtrl.push(RegistryPage, {'user' : user});
  }

  logout(){
    this.authProvider.logout();
  }

  donation(){
    this.navCtrl.setRoot(DonationPage);
  }

  health(){
    this.navCtrl.setRoot(ExamsPage);
  }

  bloodCenter(){
    this.navCtrl.setRoot(BloodCenterPage);
  }

  campaigns(){
     this.navCtrl.setRoot(CampaignPage);
  }

  informations(){
    this.navCtrl.setRoot(InformationPage);
  }

}
