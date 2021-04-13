import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddStudentsRoutingModule } from './add-students-routing.module';

import { AddStudentsComponent } from './add-students.component';



@NgModule({
  declarations: [
    AddStudentsComponent
  ],
  imports: [
    CommonModule,
    AddStudentsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddStudentsModule { }
