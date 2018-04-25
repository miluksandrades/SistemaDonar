import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  resetPassForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.initialize();
  }

  /*ionViewDidLoad(){
    this.passwordProvider.SucessEventEmitter.subscribe(
      state => this.navCtrl.setRoot(HomePage)
    )
    this.passwordProvider.ErrorEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  private initialize(){
    this.resetPass = new ResetPass();
    this.resetPassForm = this.fb.group({
      'email': ['', Validators.required]
    });
  }

  reset(){
    this.passwordProvider.resetPassword(this.resetPass);
  }
*/
}
