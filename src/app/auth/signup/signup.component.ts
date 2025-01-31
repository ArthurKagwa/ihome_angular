import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  passwordsMatch = true; // Add a flag to track password match status

  constructor(private authService: AuthService, private router: Router) {}

  // Check if passwords match as they are typed
  checkPasswords() {
    this.passwordsMatch = this.password === this.confirmPassword;
    if (!this.passwordsMatch) {
      this.errorMessage = 'Passwords do not match';
    } else {
      this.errorMessage = '';
    }
  }

  onSignup() {
    console.log('Signup', this.username, this.password, this.confirmPassword);
    // Final check before submitting
    // if (this.password !== this.confirmPassword) {
    //   this.errorMessage = 'Passwords do not match';
    //   return;
    // }

    const data = {
      username: this.username,
      password: this.password,
    };

    // Call the signup method from the AuthService
    this.authService.signup(data).subscribe({
      next: (response: any) => {
        console.log('Signup successful', response);
        this.authService.saveToken(response.token); // Save the token
        this.router.navigate(['/hero']); // Redirect to the dashboard
      },
      error: (error) => {
        console.error('Signup failed', error);
        this.errorMessage = 'Signup failed. Please try again.'; // Display error message
      },
    });
  }
}