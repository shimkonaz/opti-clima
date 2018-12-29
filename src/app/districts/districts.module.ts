import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictsRoutingModule } from './districts-routing.module';
import { DistrictsListComponent } from './districts-list/districts-list.component';
import { DistrictDetailComponent } from './district-detail/district-detail.component';

@NgModule({
  declarations: [DistrictsListComponent, DistrictDetailComponent],
  imports: [
    CommonModule,
    DistrictsRoutingModule
  ]
})
export class DistrictsModule { }
