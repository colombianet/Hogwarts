import { Component, Input, OnInit } from '@angular/core';

import { HousesResponse } from '../../../models/house-response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() characters: HousesResponse[];
  public year: number;

  constructor() {
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
