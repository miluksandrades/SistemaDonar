import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { ImagePicker } from '@ionic-native/image-picker';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Network } from "@ionic-native/network";
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';

import { BloodCentersComponent } from "../components/blood-centers/blood-centers";
import { CampaignsComponent } from "../components/campaigns/campaigns";
import { DonationsComponent } from "../components/donations/donations";
import { ExamsComponent } from "../components/exams/exams";
import { UsersComponent } from "../components/users/users";

import { EqualPasswordDirective } from '../util/equal-password.directive';

import { AuthProvider } from '../providers/auth/auth';
import { BloodCenterProvider } from '../providers/blood-center/blood-center';
import { CampaignProvider } from '../providers/campaign/campaign';
import { DonationProvider } from '../providers/donation/donation';
import { ExamProvider } from '../providers/exam/exam';
import firebase from "firebase";
import { UserProvider } from '../providers/user/user';

import { AboutPage } from "../pages/about/about";
import { BloodCenterPage } from '../pages/blood-center/blood-center';
import { CampaignPage } from '../pages/campaign/campaign';
import { DonationPage } from '../pages/donation/donation';
import { DonationAddPage } from '../pages/donation-add/donation-add';
import { QuestionsPage } from '../pages/questions/questions';
import { ExamsPage } from '../pages/exams/exams';
import { HomePage } from '../pages/home/home';
import { InformationPage } from '../pages/information/information';
import { LoginPage } from '../pages/login/login';
import { MapsPage } from '../pages/maps/maps';
import { ProfilePage } from '../pages/profile/profile';
import { RegistryPage } from '../pages/registry/registry';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { TransfusionPage } from '../pages/transfusion/transfusion';
import { MyApp } from './app.component';

const config = {
  apiKey: "AIzaSyC2aosmi9knvS8t1CFxhWmJqVUK9NMmOIM",
  authDomain: "donar-165722.firebaseapp.com",
  databaseURL: "https://donar-165722.firebaseio.com",
  projectId: "donar-165722",
  storageBucket: "donar-165722.appspot.com",
  messagingSenderId: "256001018787"
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    EqualPasswordDirective,
    BloodCentersComponent,
    BloodCenterPage,
    CampaignsComponent,
    CampaignPage,
    DonationAddPage,
    DonationPage,
    QuestionsPage,
    DonationsComponent,
    ExamsPage,
    ExamsComponent,
    HomePage,
    InformationPage,
    LoginPage,
    MapsPage,
    SignUpPage,
    ProfilePage,
    RegistryPage,
    ResetPasswordPage,
    TransfusionPage,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    BloodCentersComponent,
    BloodCenterPage,
    CampaignsComponent,
    CampaignPage,
    DonationAddPage,
    DonationPage,
    QuestionsPage,
    DonationsComponent,
    ExamsPage,
    ExamsComponent,
    HomePage,
    InformationPage,
    LoginPage,
    MapsPage,
    SignUpPage,
    ProfilePage,
    RegistryPage,
    ResetPasswordPage,
    TransfusionPage,
    UsersComponent
  ],
  providers: [
    AuthProvider,
    BloodCenterProvider,
    CampaignProvider,
    DonationProvider,
    ExamProvider,
    Facebook,
    Geolocation,
    ImagePicker,
    Network,
    ScreenOrientation,
    SplashScreen,
    StatusBar,
    SocialSharing,
    UserProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(config);
  }
}
