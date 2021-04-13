import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsStudentsComponent } from './news-students.component';

const routes: Routes = [
  { path: 'new-students', component: NewsStudentsComponent },
  { path: '**', redirectTo: 'new-students'}
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
export class NewStudentsRoutingModule { }
