import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/token/';
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
  
    return this.http.post(this.apiUrl, body).pipe(
      tap((response: any) => {
        // Assuming the response contains 'access' and 'refresh' tokens
        if (response.access) {
          this.saveToken(response.access,response.refresh);  // Store the access token
        }
      }),
      catchError((error) => {
        // Handle login errors
        let errorMessage = 'Login failed. Please try again.';
        if (error.error && error.error.detail) {
          errorMessage = error.error.detail;  // Use the error message from the backend
        }
        return throwError(() => new Error(errorMessage));
      })
    );
  }
  saveToken(token: string, refreshToken: string): void {
    console.log('Token:', token);
    localStorage.setItem('access_token', token);
    localStorage.setItem('refresh_token', refreshToken);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    sessionStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  refreshToken(): void {
    const refresh_token = localStorage.getItem('refresh_token');
    if (refresh_token) {
      this.http.post('http://127.0.0.1:8000/token/refresh/', { refresh: refresh_token })
        .subscribe((res: any) => {
          this.saveToken(res.access, res.refresh);
        });
    }
  }

  // signup
  signup(data:any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/signup/', data);
  }
  
}
