import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ImagePicker } from '@ionic-native/image-picker';

import { UserProvider } from "../../providers/user/user";

import { ProfilePage } from '../profile/profile';

import { User } from "../../models/user";

@IonicPage()
@Component({
  selector: 'page-registry',
  templateUrl: 'registry.html',
})
export class RegistryPage {

  user: User;
  registryForm: FormGroup;
  imgPath: string;
  picture: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider,
    public fb: FormBuilder, public loadCtrl: LoadingController, private toast: ToastController, private imagePicker: ImagePicker) {
    this.initialize();
  }

  ionViewDidLoad() {
    // this.userProvider.loginSucessEventEmitter.subscribe(
    //   state => this.navCtrl.setRoot(ProfilePage)
    // )
    // this.userProvider.loginErrorEventEmitter.subscribe(
    //   error => console.log(error)
    // )
  }

  private initialize() {
    this.user = this.navParams.get('user');
    if (!this.user) {
      this.user = new User();
    }

    this.registryForm = this.fb.group({
      'name': [null, Validators.required],
      'birth': [null, Validators.required],
      'country': [null, Validators.required],
      'lastName': [null, Validators.required],
      'gender': [null, Validators.required],
      'state': [null, Validators.required],
      'city': [null, Validators.required],
      'donator': [null, Validators.required],
      'blood': [null, Validators.required]
      // 'lastDonation': ['', Validators.required]
    });
  }

  registry() {
    this.userProvider.saveUser(this.user);
    this.loadSend();
  }

  chosseImage(){
    this.imagePicker.hasReadPermission()
    .then(hasPermission => {
      if(hasPermission){
        this.uploadImage();
      } else{
          this.getPermission();
    }
  }).catch(error => {
    console.log('Erro ao Verificar Permissão', error);
  });
  }

  getPermission(){
    this.imagePicker.requestReadPermission()
    .then(hasPermission => {
      if(hasPermission){
        this.uploadImage();
      } else{
          console.error('Permissão Negada!');
      }
    }).catch(error => {
      console.log('Erro ao Solicitar Permissão', error);
    });
  }

  uploadImage(){
    this.imagePicker.getPictures({
      maximumImagesCount: 1,
      outputType: 1 // Base 64
    })
      .then(results => {
        if(results.lenght > 0){
            this.imgPath = 'data: image/png;base64,' + results[0];
            this.picture = results[0];
        } else{
          this.imgPath = '';
          this.picture = null;
        }
      }).catch(error => {
        console.log('Erro ao Recuperar a Imagem', error);
      });
  }

  loadSend() {
    let loader = this.loadCtrl.create({
      content: "Entrando...",
      dismissOnPageChange: true
    });
    loader.present

    this.navCtrl.setRoot(ProfilePage);
  }

}
