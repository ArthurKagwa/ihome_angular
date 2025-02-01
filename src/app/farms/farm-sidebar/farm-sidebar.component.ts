import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FarmService } from '../../services/farm.service';

@Component({
  selector: 'app-farm-sidebar',
  imports: [],
  templateUrl: './farm-sidebar.component.html',
  styleUrl: './farm-sidebar.component.css'
})
export class FarmSidebarComponent  {
  farmDetails: any;

  constructor(private farmService: FarmService) {}

  ngOnInit(): void {
    console.log('FarmSidebarComponent initialized');
    const farmId = localStorage.getItem('farmId');
  }

  // Fetch farm details from the service
  fetchFarmDetails(farmId: any): void {
    this.farmService.getFarm(farmId).subscribe({
      next: (data) => {
        this.farmDetails = data; // Assign farm details
        console.log('Farm details:', this.farmDetails);
      },
      error: (error) => {
        console.error('Error fetching farm details:', error);
      },
    });
  }

}
