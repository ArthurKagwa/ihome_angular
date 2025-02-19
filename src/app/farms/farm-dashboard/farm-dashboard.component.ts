import { Component, OnInit } from '@angular/core';
import { FarmsService } from '../../services/farms.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FarmSidebarComponent } from '../farm-sidebar/farm-sidebar.component';

@Component({
  selector: 'app-farms',
  templateUrl: './farm-dashboard.component.html',
  styleUrls: ['./farm-dashboard.component.css'],
  imports: [CommonModule, FormsModule, FarmSidebarComponent],
})
export class FarmDashboardComponent implements OnInit {
  farms: any[] = [];
  newFarmName = '';
  newFarmLocation = '';
  newFarmEmail = '';
  newFarmPhone = '';
  addingError: { [key: string]: string[] } = {}; // ✅ Proper error type

  constructor(private farmsService: FarmsService, private router: Router) {}
  ngOnInit() {
    this.loadFarms();

  }

  loadFarms() {
    this.farmsService.getFarms().subscribe({
      next: (data) => {
        this.farms = data;
        console.log('Farms:', data);
      },
      error: (error) => {
        console.error('Error fetching farms:', error);
      }
    });
  }
  viewFarm(farmId: any) {
    console.log('View farm:', farmId);
    // route to farm view
    this.router.navigate(['/farms', farmId, 'view']);
  }
  addFarm() {
    this.addingError = {}; // ✅ Reset errors before submitting

    const newFarm = {
      name: this.newFarmName,
      location: this.newFarmLocation,
      email: this.newFarmEmail,
      phone_number: this.newFarmPhone,
    };
    // console.log('New farm:', newFarm);
    this.farmsService.createFarm(newFarm).subscribe({
      next: (data) => {
        console.log('Farm created:', data);
        this.loadFarms();
        // Clear the form
        this.newFarmName = '';
        this.newFarmLocation = '';
        this.newFarmEmail = '';
        this.newFarmPhone = '';

      },
      error: (error) => {
        this.addingError = error.error;
        console.error('Error creating farm:', error.error);

      }
    });
  }

}
