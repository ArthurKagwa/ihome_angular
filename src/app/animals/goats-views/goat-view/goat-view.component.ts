import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../../../services/animal.service';
import { BreedService } from '../../../services/breed.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoatsComponent } from '../goats/goats.component';
import { TypeService } from '../../../services/type.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-goat-view',
  standalone: true,
  imports: [CommonModule, FormsModule], // Added FormsModule
  templateUrl: './goat-view.component.html',
  styleUrl: './goat-view.component.css'
})
export class GoatViewComponent extends GoatsComponent implements OnInit { // Removed comma before implements
  goat: any; // Added missing property
  goatId: string | null = null; // Added missing property
  breedName: string = ''; // Added missing property
  showForm: boolean = false; // Added missing property

  constructor(
    override animalService: AnimalService,
    override breedService: BreedService,
    override route: ActivatedRoute,
    override typeService: TypeService, // Corrected order
    override router: Router
  ) {
    super(animalService, breedService, route, typeService, router); // Corrected super call order
  }

  override ngOnInit(): void {
    super.ngOnInit();
    console.log('GoatViewComponent initialized');
    this.goatId = this.route.snapshot.paramMap.get('goatId');
    this.farm = this.route.snapshot.paramMap.get('farmId');
    this.fetchGoat();
  }

  fetchGoat(): void {
    if (!this.goatId) return;
    
    this.animalService.getAnimal(this.goatId).subscribe({
      next: (data) => {
        this.goat = data;
        console.log('Goat data fetched successfully', data);
        
        if (this.goat.breed) {
          this.getBreedName(this.goat.breed);
        }
        this.fatherSearchText = this.goat.father;
        this.motherSearchText = this.goat.mother;
      },
      error: (err) => {
        console.error('Error fetching goat data', err);
      }
    });
  }

  override getBreedName(breed: any): string { // Maintain return type consistency
    const breedObj = this.breeds.find((b: any) => b.id === breed);
    return breedObj ? breedObj.breed_name : 'Unknown';
  }

  edit() {
    this.showForm = true;
  }

  // Better navigation using Angular router
  goBack(): void {
    this.router.navigate(['/farms', this.farm, 'goats']);
  }

  onSubmitEdit(goatForm: NgForm): void {
    if (!this.goatId) return;
    
    var goat=goatForm.value;
    console.log('Goat:', goat);
    goat.id = this.goatId;
    goat.farm = this.farm;
    console.log('Goat:', goat);
    this.animalService.updateAnimal(goat).subscribe({
      next: (data) => {
        console.log('Goat updated successfully', data);
        this.showForm = false;
        this.fetchGoat();
      },
      error: (err) => {
        console.error('Error updating goat', err);
      }
    });
   
      
  }
}