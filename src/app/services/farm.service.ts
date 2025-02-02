import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmService {
  private baseUrl = 'http://127.0.0.1:8000/farm/api/farms/'; // Django API endpoint

  constructor(private http: HttpClient) {}
  
 

 private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('auth-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    });
  }

  getFarm(farmId: any): Observable<any> {
      return this.http.get(`${this.baseUrl}${farmId}`, { headers: this.getAuthHeaders() });
    }

}
