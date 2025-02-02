import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {


  constructor(private http: HttpClient) {}

  // Get the authentication token from local storage
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('auth-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    });
  }
  baseUrl = 'http://localhost:8000/farm/api/types/';
  // Fetch all types
  getTypes(): Observable<any> {
      return this.http.get(this.baseUrl, { headers: this.getAuthHeaders() });
    }
}
