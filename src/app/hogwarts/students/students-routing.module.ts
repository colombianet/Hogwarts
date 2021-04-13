import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: '**', redirectTo: 'students'}
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class StudentsRoutingModule { }
