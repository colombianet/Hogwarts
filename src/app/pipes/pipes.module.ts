import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageNewStudentPipe } from './image-new-student.pipe';



@NgModule({
  declarations: [ImageNewStudentPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ImageNewStudentPipe
  ]
})
export class PipesModule { }
