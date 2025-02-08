import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000/'; // Replace with your Django backend URL
  private tokenKey = 'auth-token';
  private refreshTokenKey = 'refresh-token';

  constructor(private http: HttpClient, private router: Router) {}

  // Login method
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}token/`, credentials).pipe(
      tap((response: any) => {
        this.saveToken(response.access, response.expiresIn);
        this.saveRefreshToken(response.refresh);
      })
    );
  }
  

  // Signup method
  signup(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}signup/`, data);
  }

  // Save token
  saveToken(token: string, expiresIn: number) {
    const expirationTime = new Date().getTime() + expiresIn * 1000; // Convert seconds to milliseconds
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem('tokenExpiration', expirationTime.toString());
  
    this.autoLogout(expiresIn * 1000); // Auto logout when token expires
  }
  
  // Save refresh token
  saveRefreshToken(refreshToken: string) {
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }

  // Get refresh token
  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  // Refresh token method
  refreshToken(): Observable<any> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      this.logout();
      return new Observable(observer => {
        observer.error('No refresh token available');
      });
    }

    return this.http.post(`${this.baseUrl}token/refresh/`, { refresh: refreshToken }).pipe(
      tap((response: any) => {
        this.saveToken(response.access, response.expiresIn);
      })
    );
  }

  // Get token
  getToken(): string | null {
    const token = localStorage.getItem(this.tokenKey);
    const expiration = localStorage.getItem('tokenExpiration');
  
    if (!token || !expiration || new Date().getTime() > Number(expiration)) {
      

      this.logout();
      return null;
    }
    return token;
  }
  

  // Is authenticated
  isAuthenticated(): boolean {
    return this.getToken() !== null;

  }

  // Logout
  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem('tokenExpiration');
    localStorage.removeItem(this.refreshTokenKey);
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/hero']);
  }
  
  autoLogout(expirationDuration: number) {
    setTimeout(() => {
     
      this.logout();
    }, expirationDuration);
  }
  
}


