import { CampaignPage } from './../pages/campaign/campaign';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { ImagePicker } from '@ionic-native/image-picker';
import { Network } from '@ionic-native/network';
import { SocialSharing } from '@ionic-native/social-sharing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { BloodCenterPage } from '../pages/blood-center/blood-center';
import { DonationPage } from '../pages/donation/donation';
import { DoubtsPage } from '../pages/doubts/doubts';
import { HomePage } from '../pages/home/home';
import { InformationPage } from '../pages/information/information';
import { LoginPage } from '../pages/login/login';
import { MapsPage } from '../pages/maps/maps';
import { ProfilePage } from '../pages/profile/profile';
import { RegistryPage } from '../pages/registry/registry';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { TransfusionPage } from '../pages/transfusion/transfusion';

import { UserProvider } from '../providers/user/user';
import { AuthProvider } from '../providers/auth/auth';
import { ExamsPage } from '../pages/exams/exams';

const firebaseConfig = {
  apiKey: "AIzaSyC2aosmi9knvS8t1CFxhWmJqVUK9NMmOIM",
  authDomain: "donar-165722.firebaseapp.com",
  databaseURL: "https://donar-165722.firebaseio.com",
  projectId: "donar-165722",
  storageBucket: "donar-165722.appspot.com",
  messagingSenderId: "256001018787"
};

@NgModule({
  declarations: [
    MyApp,
    BloodCenterPage,
    DonationPage,
    DoubtsPage,
    HomePage,
    InformationPage,
    LoginPage,
    MapsPage,
    ProfilePage,
    RegistryPage,
    ResetPasswordPage,
    SignUpPage,
    TransfusionPage,
    ExamsPage,
    CampaignPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BloodCenterPage,
    DonationPage,
    DoubtsPage,
    HomePage,
    InformationPage,
    LoginPage,
    MapsPage,
    ProfilePage,
    RegistryPage,
    ResetPasswordPage,
    SignUpPage,
    TransfusionPage,
    ExamsPage,
    CampaignPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    ImagePicker,
    Network,
    AuthProvider,
    UserProvider,
    AngularFireAuth,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
