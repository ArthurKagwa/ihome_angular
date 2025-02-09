import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class FarmsService {
  private baseUrl = 'http://127.0.0.1:8000/farm/api/farms/'; // Django API endpoint

  constructor(private http: HttpClient, private authService: AuthService  ) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken(); 
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
      return headers;
  }

  //errors
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error && error.error.error) {
      errorMessage = error.error.error;  // Extract Django error message
    }
    return throwError(() => new Error(errorMessage));
  }

  // Fetch all farms
  getFarms(): Observable<any> {
    return this.http.get(this.baseUrl, { headers: this.getAuthHeaders() });
  }

  // Fetch a single farm by ID
  getFarm(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}/`, { headers: this.getAuthHeaders() });
  }

  // Create a new farm
  createFarm(data: any): Observable<any> {
    console.log('data', data);
    return this.http.post(this.baseUrl, data, { headers: this.getAuthHeaders() });
  }

  // Update an existing farm
  updateFarm(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${id}/`, data, { headers: this.getAuthHeaders() });
  }

  // Delete a farm
  deleteFarm(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`, { headers: this.getAuthHeaders() });
  }
}
