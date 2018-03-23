import { RegistroPage } from './../registro/registro';
import { CadastroPage } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imageArray: any = {};

  constructor(public navCtrl: NavController) {
    this.imageArray = [
      {'image': 'assets/imgs/slide1.png'},
      {'image': 'assets/imgs/slide2.png'},
      {'image': 'assets/imgs/slide3.png'}
    ]

  }

  cadastro(){
    this.navCtrl.setRoot(CadastroPage);
  }

  registro(){
    this.navCtrl.setRoot(RegistroPage);
  }

}
