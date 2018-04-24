import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserProvider } from './../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-registry',
  templateUrl: 'registry.html',
})
export class RegistryPage {

  name: string;
  lastName: string;
  picture: string;
  gender: string;
  birth: string;
  country: string;
  state: string;
  city: string;
  blood: string;
  donator: boolean;
  user: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl: LoadingController,
              private formBuilder: FormBuilder, private provider: UserProvider, private toast: ToastController) {

    /* Maneira 1 - Passando todos os dados do usuário
    this.user = this.navParams.data.user || {};
    this.createForm();*/

    // Maneira 2 - Passando a key do usuário
    this.user = {};
    this.createForm();

    if(this.navParams.data.key){
      const subsc = this.provider.get(this.navParams.data.key)
      .subscribe((c: any) => {
        subsc.unsubscribe();

        this.user = c;
        this.createForm();
      })
    }
  }

  createForm(){
    this.form = this.formBuilder.group({
      key: [this.user.key],
      name: [this.user.name, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      gender: [this.user.gender, Validators.required],
      birth: [this.user.birth, Validators.required],
      country: [this.user.country, Validators.required],
      state: [this.user.state, Validators.required],
      city: [this.user.city, Validators.required],
      blood: [this.user.blood, Validators.required],
      donator: [this.user.donator, Validators.required],
    });
  }

  onSubmit(){
    if(this.form.valid){
      this.provider.save(this.form.value)
      .then(() => {
        this.toast.create({message:'Salvo com Sucesso!', duration: 3000}).present();
        this.navCtrl.pop();
      }).catch((e) => {
        this.toast.create({message: 'Erro ao Salvar!', duration: 3000}).present();
        console.log(e);
      })
    }
  }
}
