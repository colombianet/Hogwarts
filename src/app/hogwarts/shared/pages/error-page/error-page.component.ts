import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  year = new Date().getFullYear();

  constructor( private location: Location ) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

}
