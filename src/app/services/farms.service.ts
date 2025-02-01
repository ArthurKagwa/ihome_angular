import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FarmsService {
  private baseUrl = 'http://127.0.0.1:8000/farm/api/farms/'; // Django API endpoint

  constructor(private http: HttpClient) {}

  // Get the authentication token from local storage
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('auth-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    });
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
