import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DistrictsService {

  crimesUrl = `https://opendata.city-adm.lviv.ua/api/3/action/datastore_search_sql?sql=SELECT * from "1064d271-e75f-457a-85fe-25166041d8bc" WHERE "Crime_date" > '2016-12-01' AND "Crime_date" < '2016-12-31'`;

  constructor(
    private db: AngularFirestore,
    private http: HttpClient
    ) { }

  getDistrictsList(collection) {
    return this.db.collection(collection).valueChanges();
  }

  getCrimesData() {
    return this.http
    .get(this.crimesUrl)
    .pipe(map(res => (res as any).result.records))
  }

  getCrimesStatistics() {
    return this.getCrimesData();
  }
}
