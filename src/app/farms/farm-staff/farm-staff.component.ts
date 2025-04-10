import { Component, OnInit } from '@angular/core';
import { StaffServiceService } from '../../services/staff-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-farm-staff',
  imports: [CommonModule, FormsModule],
  templateUrl: './farm-staff.component.html',
  styleUrl: './farm-staff.component.css'
})
export class FarmStaffComponent implements OnInit {
  constructor(private staffService: StaffServiceService, private route: ActivatedRoute) {
    
  }

  // properties
  farm :any;
  staffMembers: any;


  ngOnInit(): void {
    //get farm from route
    this.fetchStaff();
   
  }

  fetchStaff(){
    this.farm = this.route.snapshot.params['farmId'];

    this.staffService.getStaff(this.farm).subscribe((data: any) => {
      this.staffMembers = data;
    });
    console.log(this.staffMembers);
  }
  
  addStaff(staff: any){
    console.log(staff.value);
    this.staffService.addStaff(staff.value).subscribe((data: any) => {
      console.log(data);
      // this.fetchStaff();
    });
  }

}
