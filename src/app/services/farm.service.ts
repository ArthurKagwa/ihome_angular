import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class FarmService {
  private baseUrl = 'http://127.0.0.1:8000/farm/api/farms/'; // Django API endpoint

  constructor(private http: HttpClient,private authService :AuthService) {}


  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken(); 
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
      return headers;
  }

  getFarm(farmId: any): Observable<any> {
    return this.http.get(`${this.baseUrl}${farmId}/`, { headers: this.getAuthHeaders() }); // Added trailing slash for Django REST standard
  }
}
