import { Component, OnInit } from '@angular/core';

import { HogwartsService } from '../../services/hogwarts.service';

import { HousesResponse } from '../../models/house-response';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public wizardHouses: string[] = ['slytherin', 'gryffindor', 'ravenclaw', 'hufflepuff'];
  public characters: HousesResponse[] = [];
  loading = false;

  constructor( private hogwatrsSvc: HogwartsService ) { }

  ngOnInit(): void { }

  seeHouse( nameHouse: string ): void {
    this.hogwatrsSvc.getHouseByName( nameHouse ).subscribe( resp => {
      this.loading = true;
      this.characters = resp;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  }

}
