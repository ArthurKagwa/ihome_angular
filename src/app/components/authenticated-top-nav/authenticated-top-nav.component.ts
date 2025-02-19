import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authenticated-top-nav',
  imports: [ CommonModule],
  templateUrl: './authenticated-top-nav.component.html',
  styleUrl: './authenticated-top-nav.component.css'
})
export class AuthenticatedTopNavComponent {
  constructor(private authService: AuthService) {

  }

  isMobileMenuOpen = false; // For toggling the mobile menu

  // Toggle the mobile menu visibility
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  //is Authenticated
  isAuthenticated(): boolean {
    return this.authService.isLoggedIn();
  }

  // Handle sign out
  signOut(): void {
    this.authService.logout();
    
  }
  

}
