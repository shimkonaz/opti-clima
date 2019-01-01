import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-districts-list',
  templateUrl: './districts-list.component.html',
  styleUrls: ['./districts-list.component.scss']
})
export class DistrictsListComponent implements OnInit {
  districts: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.districts = db.collection('districts').valueChanges();
    // console.log(this.districts);
  }

  ngOnInit() {
  }

}
