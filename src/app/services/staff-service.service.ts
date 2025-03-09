import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {

  constructor(private http: HttpClient) {}
  private getAuthHeaders(): HttpHeaders {
      const token = localStorage.getItem('auth-token');
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      });
    }
    baseUrl = 'http://localhost:8000/farm/api/staff/';

    // fetch all staff
    getStaff(farm :any): Observable<any> {
      const url = this.baseUrl+farm;
        return this.http.get(url, { headers: this.getAuthHeaders() });
      }
    // add staff
    addStaff( staff: any): Observable<any> {
      const url = this.baseUrl;
      return this.http.post(url, staff, { headers: this.getAuthHeaders() });
    }
}
