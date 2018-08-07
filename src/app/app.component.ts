import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { Network } from "@ionic-native/network";

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen,
              private screenOrientation: ScreenOrientation,
              private network: Network, private toastCtrl: ToastController) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    });

    this.network.onDisconnect().subscribe(() => {
      this.toastCtrl.create({
        message: 'Sem Acesso à Internet',
        showCloseButton: true,
        closeButtonText: 'Ok',
        position: 'middle'
      }).present();
    });
  }
}
