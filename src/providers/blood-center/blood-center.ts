import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from "firebase";
import { AuthProvider } from "../auth/auth";

import { BloodCenter } from "../../models/blood-center";

@Injectable()
export class BloodCenterProvider {

  reference;

  constructor(public http: Http, public authProvider: AuthProvider) {
    this.initialize();
  }

  private initialize(){
    this.reference = firebase.database().ref('/bloodCenter/');
  }

  save(place: BloodCenter){
    let id;
    if(place.id != undefined){
      id = place.id;
    }else{
      id = this.reference.push().key;
      place.id = id;
    }
    this.reference.child(id).update(place);
  }

  delete(place: BloodCenter){
    return this.reference.child(place.id).remove();
  }

}
