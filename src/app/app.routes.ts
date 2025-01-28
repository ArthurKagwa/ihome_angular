import { Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero.component';
import { SignupComponent } from './auth/signup/signup.component';

export const routes: Routes = [
    { path: 'hero', component: HeroComponent },
    { path: 'signup', component: SignupComponent },
    { }
];
