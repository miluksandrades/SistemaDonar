import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { UserProvider } from './../../providers/user/user';

import { InformationPage } from './../information/information';
import { BloodCenterPage } from './../blood-center/blood-center';
import { DonationPage } from './../donation/donation';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  users: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private provider: UserProvider, private toast: ToastController) {
                this.users = this.provider.getAllUsers();
  }

  editUser(user : any){
    // Maneira 1 - Passando todos os dados do usuário
    //this.navCtrl.push('RegistryPage', {user: user});

    // Maneira 2 - Passando a key do usuário
    this.navCtrl.push('RegistryPage', {key: user.key});
  }

  removeUser(key: string){
    this.provider.remove(key)
    .then(() => {
      this.toast.create({message: 'Deletado com Sucesso!', duration: 3000}).present();
    })
    .catch((e) => {
      this.toast.create({message: 'Erro ao realizar exclusão!', duration: 3000}).present();
    })
  }

  donation(){
    this.navCtrl.setRoot(DonationPage);
  }

  bloodCenter(){
    this.navCtrl.setRoot(BloodCenterPage);
  }

  information(){
    this.navCtrl.setRoot(InformationPage);
  }

}
