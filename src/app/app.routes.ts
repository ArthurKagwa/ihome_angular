import { Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FarmDashboardComponent } from './farms/farm-dashboard/farm-dashboard.component';
import { FarmAnimalsComponent } from './farms/farm-animals/farm-animals.component';
import { FarmEventsComponent } from './farms/farm-events/farm-events.component';
import { FarmTasksComponent } from './farms/farm-tasks/farm-tasks.component';
import { FarmStaffComponent } from './farms/farm-staff/farm-staff.component';
import { FarmMedicationComponent } from './farms/farm-medication/farm-medication.component';
import { FarmViewComponent } from './farms/farm-view/farm-view.component';
// import { AnimalComponent } from './animals/animal/animal.component';
import { GoatsComponent } from './animals/goats/goats.component';


export const routes: Routes = [
    { path: 'hero', component: HeroComponent },
    { path: 'signup', component: SignupComponent },
    // { path: '**', redirectTo: 'hero' },
    { path: 'login', component: LoginComponent },
    { path: 'farms', component: FarmDashboardComponent },
    { path: 'farms/:farmId/animals', component: FarmAnimalsComponent },
    { path: 'farms/:farmId/events', component: FarmEventsComponent },
    { path: 'farms/:farmId/tasks', component: FarmTasksComponent },
    { path: 'farms/:farmId/staff', component: FarmStaffComponent },
    { path: 'farms/:farmId/medication', component: FarmMedicationComponent },
    { path: 'farms/:farmId/view', component: FarmViewComponent },
    // { path: 'animals/:farmId' ,component: AnimalComponent},
    { path: 'animals/goats/:farmId', component: GoatsComponent }
];
