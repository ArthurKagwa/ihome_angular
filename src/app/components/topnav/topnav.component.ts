import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-topnav',
  imports: [CommonModule],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.css'
})
export class TopnavComponent {
  constructor(private authService: AuthService) {
    this.isAuth = this.isAuthenticated();

  }
  token: any;
  isAuth: boolean ;

  ngOnInit(): void {
    console.log('TopnavComponent initialized');
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
