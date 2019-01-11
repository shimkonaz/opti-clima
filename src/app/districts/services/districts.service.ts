import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { groupBy } from 'lodash';
import { of, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistrictsService {

  crimesUrl = `https://opendata.city-adm.lviv.ua/api/3/action/datastore_search_sql?sql=SELECT * from "1064d271-e75f-457a-85fe-25166041d8bc" WHERE "Crime_date" > '2016-12-01' AND "Crime_date" < '2016-12-31'`;
  domRiaUrl = `https://developers.ria.com/dom/average_price/5?lang_id=4&api_key=l8jdGF6ec0i058qaWCakG3e0JCzxnKmvXpjvosVT`;

  constructor(
    private http: HttpClient
    ) { }

    getDistricts() {
    return this.http.get(this.crimesUrl)
    .pipe(
      map((res) => {
        return (res as any).result.records
          .map(elem => elem.Mikroraion)
      }),
      map(res => groupBy(res)),
      map(res => Object.keys(res)
        .reduce((result, nextKey) => {
          return [
            ...result,
            {
              name: nextKey,
              count: res[nextKey].length
            }
          ]
        }, [])
      ),
      switchMap(districts => {
        
        return of(districts)
          .pipe(
            switchMap(districts => {
              return this.getDistrictsFromRia()
                .pipe(
                  map((districtsFromRia: any[]) => {
                    return districtsFromRia
                      .filter(
                        districtFromRia => districts.find(d => d.name === districtFromRia.name)
                      )
                      .map(
                        districtsFromRia => ({
                          ...districtsFromRia,
                          ...districts.find(d => d.name === districtsFromRia.name)
                        })
                      );
                  })
                );
            }),
            switchMap((matchedDistricts: any[]) => {
              return forkJoin(
                matchedDistricts.map(({ area_id }) => this.getDistrictFlatPriceStat(area_id))
              )
                .pipe(
                  map(averagePrices => {
                    return matchedDistricts.map((district, index) => {
                      return {
                        ...district,
                        averagePrice: averagePrices[index]
                      }
                    });
                  })
                );
            }),
            map(
              matchedDistricts => matchedDistricts
              .sort((d1, d2) => d1.count - d2.count)
            )
          )
      })
    )
  }

  getDistrictFlatPriceStat = districtId => {
    return this.http.get(
      `https://developers.ria.com/dom/average_price?category=1&sub_category=2&operation=1&city_id=5&api_key=l8jdGF6ec0i058qaWCakG3e0JCzxnKmvXpjvosVT`
    )
      .pipe(map((response: any) => response.arithmeticMean));
  }

  getDistrictsFromRia = () => {
    return this.http.get(
      'https://developers.ria.com/dom/cities_districts/5?lang_id=4&api_key=l8jdGF6ec0i058qaWCakG3e0JCzxnKmvXpjvosVT'
    ).pipe(
      map(([districtsWithDescription]: any) => {
        const [description, ...districts] = districtsWithDescription;
  
        return districts;
      }),
      map(districts => (districts as any[]).map(({ name, area_id }) => ({ name, area_id })))
    )
  };
}
