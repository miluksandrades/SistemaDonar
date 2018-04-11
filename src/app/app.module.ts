import { InformacoesPage } from './../pages/informacoes/informacoes';
import { HemocentroPage } from './../pages/hemocentro/hemocentro';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { PerfilPage } from './../pages/perfil/perfil';
import { DonationAddPage } from './../pages/donation-add/donation-add';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {FileChooser} from '@ionic-native/file-chooser';
import {FilePath} from '@ionic-native/file-path';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DonationAddPage,
    PerfilPage,
    CadastroPage,
    RegistroPage,
    HemocentroPage,
    InformacoesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DonationAddPage,
    PerfilPage,
    CadastroPage,
    RegistroPage,
    HemocentroPage,
    InformacoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
