import { Component, OnInit } from '@angular/core';
import { FarmsService } from '../../services/farms.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-farms',
  templateUrl: './farm-dashboard.component.html',
  styleUrls: ['./farm-dashboard.component.css'],
  imports: [CommonModule, FormsModule],
})
export class FarmDashboardComponent implements OnInit {
  farms: any[] = [];
  newFarmName = '';
  newFarmLocation = '';
  newFarmEmail = '';
  newFarmPhone = '';

  constructor(private farmsService: FarmsService) {}

  ngOnInit() {
    this.loadFarms();
  }

  loadFarms() {
    this.farmsService.getFarms().subscribe({
      next: (data) => {
        this.farms = data;
      },
      error: (error) => {
        console.error('Error fetching farms:', error);
      }
    });
  }
  addFarm() {
    const newFarm = {
      name: this.newFarmName,
      location: this.newFarmLocation,
      email: this.newFarmEmail,
      phone_number: this.newFarmPhone,
    };
    console.log('New farm:', newFarm);
    this.farmsService.createFarm(newFarm).subscribe({
      next: (data) => {
        console.log('Farm created:', data);
        this.loadFarms();
      },
      error: (error) => {
        console.error('Error creating farm:', error);
      }
    });
  }

}
