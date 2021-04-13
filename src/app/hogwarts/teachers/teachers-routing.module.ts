import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersComponent } from './teachers.component';

const routes: Routes = [
  { path: 'teachers', component: TeachersComponent },
  { path: '**', redirectTo: 'teachers'}
];


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class TeachersRoutingModule { }
