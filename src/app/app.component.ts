import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopnavComponent } from './components/topnav/topnav.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthenticatedTopNavComponent } from './components/authenticated-top-nav/authenticated-top-nav.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopnavComponent, HttpClientModule, CommonModule, FormsModule, AuthenticatedTopNavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  

})
export class AppComponent {
  constructor( private authService: AuthService) {
  }
  title = 'ihome_angular';
  isAuthenticated(): boolean {
    return this.authService.isLoggedIn();
  }
}
