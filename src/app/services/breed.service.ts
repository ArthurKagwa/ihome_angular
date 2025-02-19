import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  baseUrl = 'http://localhost:8000/farm/api/breeds/';
  constructor(private http:HttpClient,private authService:AuthService) { }

  
    private getAuthHeaders(): HttpHeaders {
      const token = this.authService.getToken(); 
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
     
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
        return headers;
    }


  getBreedsByType(type:any): Observable<any> {
    return this.http.get(`${this.baseUrl}by_type/${type}/`, { headers: this.getAuthHeaders() });
  }
  
  getBreedsByTypeAndFarm(type:any,farm:any): Observable<any> {
    return this.http.get(`${this.baseUrl}by_type_and_farm/?type_id=${type}&farm_id=${farm}`, { headers: this.getAuthHeaders() });
  }

  getBreed(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}/`, { headers: this.getAuthHeaders() });
    
  }

  addBreed(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data, { headers: this.getAuthHeaders() });
  }
}
