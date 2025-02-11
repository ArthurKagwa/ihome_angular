import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../../services/animal.service';
import { BreedService } from '../../services/breed.service';

@Component({
  selector: 'app-goat-view',
  imports: [],
  templateUrl: './goat-view.component.html',
  styleUrl: './goat-view.component.css'
})
export class GoatViewComponent {
  constructor( private animalService :AnimalService,private breedService:BreedService,private route:ActivatedRoute) { 
  }
  goatId: any;
  goat: any;
  breedName: any;

  ngOnInit(): void {
    console.log('GoatViewComponent initialized');
    //get goatid from route
    this.goatId = this.route.snapshot.paramMap.get('goatId');
    //fetch goat data
    this.fetchGoat();

  }

  fetchGoat(): void {
    this.animalService.getAnimal(this.goatId).subscribe({
      next: (data) => {
        this.goat = data;
        console.log('Goat data fetched successfully', data);
        
        // Fetch breed name after goat data is loaded
        if (this.goat.breed) {
          this.getBreedName(this.goat.breed);
        }
      },
      error: (err) => {
        console.error('Error fetching goat data', err);
      }
    });
  }


  //go back to the previous page
  goBack(): void {
    window.history.back();
  }


  // get breed name
  getBreedName(breed: any): void {
    this.breedService.getBreed(breed).subscribe({
      next: (response) => {
        this.breedName = response.breed_name;
        console.log('Breed name fetched successfully', response.breed_name);
      },
      error: (err) => {
        console.error('Error fetching breed name', err);
      }
    });
  }

}
