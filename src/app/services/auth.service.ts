import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-auth-server.com';
  private refreshTokenUrl = `${this.apiUrl}/refresh-token`;

  constructor(private http: HttpClient) {}


  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      return throwError('No refresh token available');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.refreshTokenUrl, { refreshToken }, { headers }).pipe(
      catchError(error => {
        console.error('Error refreshing token:', error);
        return throwError(error);
      })
    );
  }

  // Method to handle API calls with token refresh logic
  makeAuthenticatedRequest<T>(request: () => Observable<T>): Observable<T> {
    return request().pipe(
      catchError(error => {
        if (error.status === 401) {
          // Token expired, try to refresh
          return this.refreshToken().pipe(
            switchMap((response: any) => {
              localStorage.setItem('accessToken', response.accessToken);
              localStorage.setItem('refreshToken', response.refreshToken);
              // Retry the original request with the new token
              return request();
            })
          );
        } else {
          return throwError(error);
        }
      })
    );
  }
}
