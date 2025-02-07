import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';

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
  providers: [],
  bootstrap: []
})
export class AppModule { }
