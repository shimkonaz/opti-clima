import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistrictsListComponent } from './districts-list/districts-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    children: [
      { path: '', component: DistrictsListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictsRoutingModule { }
