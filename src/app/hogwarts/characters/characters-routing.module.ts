import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'characters',
        component: CharactersComponent
      },
      {
        path: '**',
        redirectTo: 'characters'
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class CharactersRoutingModule { }
