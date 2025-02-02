import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  baseUrl = 'http://localhost:8000/farm/api/breeds/';
  constructor(private http:HttpClient) { }

  getAuthHeaders() {
    const token = localStorage.getItem('auth-token');
    return {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    };
  }


  getBreedsByType(type:any): Observable<any> {
    return this.http.get(`${this.baseUrl}by_type/${type}/`, { headers: this.getAuthHeaders() });
  }
  
  getBreedsByTypeAndFarm(type:any,farm:any): Observable<any> {
    return this.http.get(`${this.baseUrl}by_type_and_farm/?type_id=${type}&farm_id=${farm}`, { headers: this.getAuthHeaders() });
  }

  addBreed(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data, { headers: this.getAuthHeaders() });
  }
}
