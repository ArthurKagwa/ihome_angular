import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  baseUrl = 'http://localhost:8000/farm/api/animals/';

  
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken(); 
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
      return headers;
  }

  getAnimalsByType(type: any,farm: any): Observable<any> {
    console.log('farm:',farm);
    return this.http.get(`${this.baseUrl}by_type_and_farm/?type_id=goat&farm_id=${farm}`, { headers: this.getAuthHeaders() });
  }

  addAnimal(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data, { headers: this.getAuthHeaders() });
  }

  getAnimal(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}/`, { headers: this.getAuthHeaders() });
  }

  


  


  
}
