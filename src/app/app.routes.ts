import { Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FarmDashboardComponent } from './farms/farm-dashboard/farm-dashboard.component';

export const routes: Routes = [
    { path: 'hero', component: HeroComponent },
    { path: 'signup', component: SignupComponent },
    // { path: '**', redirectTo: 'hero' },
    { path: 'login', component: LoginComponent },
    { path: 'farms', component: FarmDashboardComponent },
];
