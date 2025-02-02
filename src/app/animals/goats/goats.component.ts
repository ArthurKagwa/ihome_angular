import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimalService } from '../../services/animal.service';
import { BreedService } from '../../services/breed.service';
import { ActivatedRoute } from '@angular/router';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-goats',
  templateUrl: './goats.component.html',
  styleUrls: ['./goats.component.css'],
  imports: [CommonModule, FormsModule]
})
export class GoatsComponent implements OnInit {
  onSubmit(goatForm: NgForm) {
    if (goatForm.valid) {
      const formData = goatForm.value;
      this.addAnimal(formData);
    } else {
      console.log('Form is invalid');
    }
  }
  addAnimal(formData: any) {
    this.animalService.addAnimal(formData).subscribe({
      next: (data) => {
        console.log('Animal added:', data);
        this.fetchGoats();
      },
      error: (error) => {
        console.error('Error adding animal:', error);
      },
    }); 
    
  }

  
  goats: any;
  farm: any;
  types: any;
  mothers: any;
  fathers: any;
  breeds: any;

  constructor(private animalService: AnimalService, private breedService: BreedService, private route: ActivatedRoute, private typeService: TypeService) {
  
  }

  ngOnInit(): void {
    console.log('GoatsComponent initialized');
    this.farm = this.route.snapshot.paramMap.get('farmId');
    this.types= this.typeService.getTypes().subscribe({
      next: (data) => {
        this.types = data;
        console.log('Types:', data);
      },
      error: (error) => {
        console.error('Error fetching types:', error);
      },
    });
    console.log('Types:', this.types);

    this.fetchGoats();
    this.fetchBreeds();
  }
  fetchBreeds() {
    console.log('loading breeds');
    this.breeds= this.breedService.getBreedsByTypeAndFarm('goat',this.farm).subscribe({
      next: (data) =>{
        this.breeds =data;

      },
      error: (error) => {
        console.error('Error fetching goats:', error);
    }
    });
  }

  fetchGoats() {
    console.log('farm:',this.farm);
    this.animalService.getAnimalsByType('goat',this.farm).subscribe({
      next: (data) => {
        this.goats = data;
        console.log('Goats:', this.goats);
      },
      error: (error) => {
        console.error('Error fetching goats:', error);
    }
  });


}
fetchFathers(goats: any) {
  //pick males
  //gender ='M'
  this.fathers = goats.filter((goat: any) => goat.gender === 'M'|| 'm'|| 'male');
  }
  fetchMothers(goats: any) {
    // pick females gender ='F'
    this.mothers = goats.filter((goat:any) => goat.gender === 'F'|| 'f'|| 'female');
  }
}