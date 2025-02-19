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

    this.authService.login(this.username, this.password).subscribe(
      (res) => {
        this.authService.saveToken(res.access, res.refresh);
        this.router.navigate(['/']);
      },
      (err) => console.error('Login failed', err)

    );
  }
}