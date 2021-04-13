import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPageComponent } from './hogwarts/shared/pages/error-page/error-page.component';
import { HomeComponent } from './hogwarts/shared/pages/home/home.component';



const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () => import('./hogwarts/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./hogwarts/students/students.module').then(m => m.StudentsModule)
  },
  {
    path: 'add-students',
    loadChildren: () => import('./hogwarts/add-students/add-students.module').then(m => m.AddStudentsModule)
  },
  {
    path: 'new-students',
    loadChildren: () => import('./hogwarts/news-students/news-students.module').then(m => m.NewsStudentsModule)
  },
  {
    path: 'teachers',
    loadChildren: () => import('./hogwarts/teachers/teachers.module').then(m => m.TeachersModule)
  },
  { path: '', component: HomeComponent },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
