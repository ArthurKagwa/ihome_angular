import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { JwtInterceptor } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    LoginComponent,
    HttpClientModule,
    AppRoutingModule // Add AppRoutingModule to imports
  ],
  providers: [    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: []
})
export class AppModule { }
