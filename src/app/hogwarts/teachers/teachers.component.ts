import { Component, Input, OnInit } from '@angular/core';
import { HousesResponse } from '../../models/house-response';
import { HogwartsService } from '../../services/hogwarts.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  @Input() characters: HousesResponse[];
  loading = false;

  constructor( private hogwartsSvc: HogwartsService ) { }

  ngOnInit(): void {
    this.hogwartsSvc.getTeachers().subscribe( resp => {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
      this.characters = resp;
    });
  }

}
