import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DistrictsService } from '../services/districts.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-districts-list',
  templateUrl: './districts-list.component.html',
  styleUrls: ['./districts-list.component.scss']
})
export class DistrictsListComponent implements OnInit {
  districts: Observable<any[]>;
  crimes: Observable<any>;

  constructor(
    private districtsService: DistrictsService
    ) {
  }
  
  ngOnInit() {
    this.districts = this.districtsService.getCrimesStatistics();
  }

}
