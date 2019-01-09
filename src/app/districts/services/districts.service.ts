import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { defineBase } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class DistrictsService {

  constructor(private db: AngularFirestore) { }

  getDistrictsList(collection) {
    return this.db.collection(collection).valueChanges();
  }
}
