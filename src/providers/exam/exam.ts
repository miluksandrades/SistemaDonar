import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from "firebase";
import { AuthProvider } from "../auth/auth";

import { Exam } from "../../models/exam";

@Injectable()
export class ExamProvider {

  reference;

  constructor(public http: Http, private authProvider: AuthProvider) {
    this.initialize();
  }

  private initialize(){
    this.reference = firebase.database().ref('/exams/'+ this.authProvider.currentUser.uid);
  }

  save(exam: Exam){
    let id;
    if(exam.id != undefined){
      id = exam.id;
    } else{
      id = this.reference.push().key;
      exam.id = id;
    }
    this.reference.child(id).update(exam);
  }

  delete(exam: Exam){
    return this.reference.child(exam.id).remove();
  }

}
