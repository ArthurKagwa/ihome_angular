import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8000/farm/api/animals/';

  getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('auth-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });

  }

  getAnimalsByType(type: any,farm: any): Observable<any> {
    console.log('farm:',farm);
    return this.http.get(`${this.baseUrl}by_type_and_farm/?type_id=${type}&farm_id=${farm}`, { headers: this.getAuthHeaders() });
  }

  addAnimal(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data, { headers: this.getAuthHeaders() });
  }


  


  
}
