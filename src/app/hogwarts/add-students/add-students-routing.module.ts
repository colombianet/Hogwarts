import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStudentsComponent } from './add-students.component';

const routes: Routes = [
  { path: 'add-students', component: AddStudentsComponent },
  { path: '**', redirectTo: 'add-students'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AddStudentsRoutingModule { }
