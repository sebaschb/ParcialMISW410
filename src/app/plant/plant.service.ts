import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Plant } from './plant';

@Injectable({
  //Para que pueda ser usado en todo lado
  providedIn: 'root',
})
export class PlantService {
  private apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.apiUrl);
  }
}
