import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { ImagePicker } from '@ionic-native/image-picker'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { AuthPage } from '../pages/auth/auth';
import { BloodCenterPage } from '../pages/blood-center/blood-center';
import { DonationPage } from '../pages/donation/donation';
import { DoubtsPage } from '../pages/doubts/doubts';
import { HomePage } from '../pages/home/home';
import { InformationPage } from '../pages/information/information';
import { MapsPage } from '../pages/maps/maps';
import { ProfilePage } from '../pages/profile/profile';
import { RegistryPage } from '../pages/registry/registry';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { TransfusionPage } from '../pages/transfusion/transfusion';

import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    AuthPage,
    BloodCenterPage,
    DonationPage,
    DoubtsPage,
    HomePage,
    InformationPage,
    MapsPage,
    ProfilePage,
    RegistryPage,
    SignUpPage,
    TransfusionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC2aosmi9knvS8t1CFxhWmJqVUK9NMmOIM",
      authDomain: "donar-165722.firebaseapp.com",
      databaseURL: "https://donar-165722.firebaseio.com",
      projectId: "donar-165722",
      storageBucket: "donar-165722.appspot.com",
      messagingSenderId: "256001018787"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AuthPage,
    BloodCenterPage,
    DonationPage,
    DoubtsPage,
    HomePage,
    InformationPage,
    MapsPage,
    ProfilePage,
    RegistryPage,
    SignUpPage,
    TransfusionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    ImagePicker
  ]
})
export class AppModule {}
