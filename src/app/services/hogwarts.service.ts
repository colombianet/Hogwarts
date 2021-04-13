import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { HousesResponse } from '../models/house-response';

@Injectable({
  providedIn: 'root'
})
export class HogwartsService {

  private baseUrl = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getHouseByName( nameHouse: string ): Observable<HousesResponse[]> {
    return this.http.get<HousesResponse[]>(`${ this.baseUrl }/characters/house/${ nameHouse }`);
  }

  getStudents(): Observable<HousesResponse[]> {
    return this.http.get<HousesResponse[]>(`${ this.baseUrl }/characters/students`);
  }

  getTeachers(): Observable<HousesResponse[]> {
    return this.http.get<HousesResponse[]>(`${ this.baseUrl }/characters/staff`);
  }
}
