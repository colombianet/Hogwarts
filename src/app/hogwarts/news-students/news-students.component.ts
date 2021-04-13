import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-students',
  templateUrl: './news-students.component.html',
  styleUrls: ['./news-students.component.css']
})
export class NewsStudentsComponent implements OnInit {

  characters: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.characters = JSON.parse( localStorage.getItem('characters') );
  }

}
