import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class UserProvider {

  private PATH = 'users/';

  constructor(private db: AngularFireDatabase, private fb: FirebaseApp) {}

    getAllUsers(){
      return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    }

    getUser(key: string){
      return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val()};
      });
    }

    save(user: any){
      return new Promise((resolve, reject) => {
        if(user.key){
          this.db.list(this.PATH)
          .update(user.key, {name: user.name, lastName: user.lastName, picture: user.picture,
                             gender: user.gender, birth: user.birth, country: user.country,
                             state: user.state, city: user.city, blood: user.blood, donator: user.donator})
          .then(() => resolve())
          .catch((e) => reject(e));

          /*this.db.object(this.PATH + user.key)
          .update(user.key, {name: user.name, lastName: user.lastName, picture: user.picture,
                             gender: user.gender, birth: user.birth, country: user.country,
                             state: user.state, city: user.city, blood: user.blood, donator: user.donator})
          .then(() => resolve())
          .catch((e) => reject(e));*/
        }else{
          this.db.list(this.PATH)
          .push({name: user.name, lastName: user.lastName, picture: user.picture,
                             gender: user.gender, birth: user.birth, country: user.country,
                             state: user.state, city: user.city, blood: user.blood, donator: user.donator})
          .then(() => resolve());
        }
      })
    }

    /*uploadAndSave(item: any){
      let user = {$key: item.key, name: item.name, url: '', fullPath: ''};

      let storageRef = this.fb.storage().ref();
      let basePath = 'users/' + this.angula

    }*/

    remove(key: string){
      return this.db.list(this.PATH).remove(key);
    }
}
