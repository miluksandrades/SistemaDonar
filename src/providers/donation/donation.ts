import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from "firebase";
import { AuthProvider } from "../auth/auth";

import { Donation } from "../../models/donation";

@Injectable()
export class DonationProvider {

  reference;

  constructor(public http: Http, private authProvider: AuthProvider) {
    this.initialize();
  }

  private initialize(){
    this.reference = firebase.database().ref('/donation/'+ this.authProvider.currentUser.uid);
  }

  save(donation: Donation){
    let id;
    if(donation.id != undefined){
      id = donation.id;
    } else{
      id = this.reference.push().key;
      donation.id = id;
    }
    this.reference.child(id).update(donation);
  }

  delete(donation: Donation){
    return this.reference.child(donation.id).remove();
  }

}
