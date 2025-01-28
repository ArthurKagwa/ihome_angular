import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topnav',
  imports: [CommonModule],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.css'
})
export class TopnavComponent {
  isAuthenticated = false; // Set to `true` if the user is authenticated
  isMobileMenuOpen = false; // For toggling the mobile menu

  // Toggle the mobile menu visibility
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Handle sign out
  signOut(): void {
    // Simulate sign-out logic
    this.isAuthenticated = false;
    console.log('User signed out');
  }
}
