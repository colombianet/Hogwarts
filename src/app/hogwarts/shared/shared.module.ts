import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ErrorPageComponent,
    ListComponent,
    HomeComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ListComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
