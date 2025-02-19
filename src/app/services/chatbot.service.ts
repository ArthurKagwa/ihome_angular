import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  baseUrl = 'http://localhost:8000/farm/api/chatbot/';

  constructor(private http:HttpClient,private authService:AuthService) { }

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken(); 
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
      return headers;
  }

  sendMessage(message: string): Observable<any> {
    const data = { content: message };
    return this.http.post(this.baseUrl, data, { headers: this.getAuthHeaders() });
  }

}
