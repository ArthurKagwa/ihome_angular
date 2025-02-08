import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const credentials = { username: this.username, password: this.password };

    this.authService.login(credentials).subscribe({
      next: (response: any) => {
        this.authService.saveToken(response.token, response.expiresIn);
        console.log(response);
        this.router.navigate(['/hero']); 
      },
      error: () => {
        this.errorMessage = 'Invalid username or password';
      },
    });
  }
}