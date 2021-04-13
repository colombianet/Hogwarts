import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HogwartsService } from '../../services/hogwarts.service';

import { HousesResponse } from '../../models/house-response';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @Input() characters: HousesResponse[];
  loading = false;

  constructor( private hogwartsSvc: HogwartsService, private router: Router ) { }

  ngOnInit(): void {
    this.hogwartsSvc.getStudents().subscribe( resp => {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
      this.characters = resp;
    });
  }

  addStudent(): void {
    this.router.navigateByUrl('/add-students');
  }

}
