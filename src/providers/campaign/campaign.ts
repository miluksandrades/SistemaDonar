import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from "firebase";

import { Campaign } from "../../models/campaign";

@Injectable()
export class CampaignProvider {

  reference;

  constructor(public http: Http) {
    this.initialize();
  }

  private initialize(){
    this.reference = firebase.database().ref('/campaign/');
  }

  save(campaign: Campaign){
    let id;
    if(campaign.id != undefined){
      id = campaign.id;
    }else{
      id = this.reference.push().key;
      campaign.id = id;
    }
    this.reference.child(id).update(campaign);
  }

  delete(campaign: Campaign){
    return this.reference.child(campaign.id).remove();
  }

}
