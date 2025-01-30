import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8001/'; // Replace with your Django backend URL
  private tokenKey = 'auth-token';

  constructor(private http: HttpClient, private router: Router) {}

  // Login method
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login/`, credentials);
  }

  // Signup method
  signup(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup/`, data);
  }

  // Save token
  saveToken(token: string) {
   
    localStorage.setItem(this.tokenKey, token);

  }

  // Get token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Logout
  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}