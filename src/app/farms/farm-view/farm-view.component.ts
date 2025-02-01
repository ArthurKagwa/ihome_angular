import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { FarmSidebarComponent } from '../farm-sidebar/farm-sidebar.component';
import { FarmService } from '../../services/farm.service';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-farm-view',
  standalone: true,
  imports: [FarmSidebarComponent, CommonModule, FormsModule],
  templateUrl: './farm-view.component.html',
  styleUrls: ['./farm-view.component.css'],
})
export class FarmViewComponent implements OnInit {
goBack() {
  // go back to the previous page
  window.history.back();
}
  farmId: string | null = null; // Store farmId
  farmDetails: any = {}; // Store farm details
  types:any ={};

  constructor(
    private route: ActivatedRoute, // Inject ActivatedRoute
    private farmService: FarmService ,// Inject FarmService
    private typeService: TypeService
  ) {}

  ngOnInit(): void {
    // Get farmId from the route
    this.farmId = this.route.snapshot.paramMap.get('farmId');
    console.log('Farm ID:', this.farmId);
    //store farmId in local storage
    localStorage.setItem('farmId', this.farmId as string);

    // Fetch farm details if farmId is available
    if (this.farmId) {
      console.log('Fetching farm details...');
      this.fetchFarmDetails(this.farmId);
      
    }
    //load types
    this.loadTypes();
  }
  loadTypes() {
    this.typeService.getTypes().subscribe({
      next: (data) => {
        this.types = data;
        console.log('Types:', data);
      },
      error: (error) => {
        console.error('Error fetching types:', error);
      },
    });
  }
  // Fetch farm details from the service
  fetchFarmDetails(farmId: any): void {
    this.farmService.getFarm(farmId).subscribe({
      next: (data) => {
         this.farmDetails=data;
      },
      error: (error) => {
        console.error('Error fetching farm details:', error);
      },
    });
  }
}