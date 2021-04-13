import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewStudentsRoutingModule } from './new-students-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../../pipes/pipes.module';

import { NewsStudentsComponent } from './news-students.component';



@NgModule({
  declarations: [
    NewsStudentsComponent
  ],
  imports: [
    CommonModule,
    NewStudentsRoutingModule,
    SharedModule,
    PipesModule
  ]
})
export class NewsStudentsModule { }
