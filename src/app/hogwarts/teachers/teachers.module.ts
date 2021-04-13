import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TeachersRoutingModule } from './teachers-routing.module';

import { TeachersComponent } from './teachers.component';



@NgModule({
  declarations: [TeachersComponent],
  imports: [
    CommonModule,
    SharedModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
