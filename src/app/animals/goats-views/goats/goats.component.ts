import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimalService } from '../../../services/animal.service';
import { BreedService } from '../../../services/breed.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeService } from '../../../services/type.service';

@Component({
  selector: 'app-goats',
  templateUrl: './goats.component.html',
  styleUrls: ['./goats.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class GoatsComponent implements OnInit {
getBreedName(gbreed: any) {
  return this.breeds.find((breed : any) => breed.id === gbreed)?.breed_name
}
 
  
  goats: any;
  farm: any;
  types: any;
  mothers: any;
  fathers: any;
  breeds: any;
  filteredFathers: any[]=[];
  filteredMothers: any[]=[];
  fatherSearchText: any;
  motherSearchText: any;
  showBreedForm = false;
  showGoatForm = false;

  toggleBreedForm() {
    this.showBreedForm = !this.showBreedForm;
  }

  toggleGoatForm() {
    this.showGoatForm = !this.showGoatForm;
  }

  constructor(protected animalService: AnimalService, protected breedService: BreedService, protected route: ActivatedRoute, protected typeService: TypeService, protected router: Router) {
  
  }

  ngOnInit(): void {
    console.log('GoatsComponent initialized');
    this.farm = this.route.snapshot.paramMap.get('farmId');
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

  protected fetchGoats() {
    this.animalService.getAnimalsByType('goat',this.farm).subscribe({
      next: (data) => {
        this.goats = data;
        console.log('fetching goats');
        console.log('Goats:', this.goats);
        this.fetchFathers(this.goats);
        this.fetchMothers(this.goats);
        this.filteredFathers= this.fathers;
        this.filteredMothers= this.mothers;
        
      },
      error: (error) => {
        console.error('Error fetching goats:', error);
    }

    });
    console.log('Goats:', this.goats);


  }
protected fetchFathers(goats: any) {
  //pick males
  //gender ='M'
  console.log('Goats:', goats);
  this.fathers = goats.filter((goat: any) => goat.sex === 'M');
  console.log('Fathers:', this.fathers);
  }
  protected fetchMothers(goats: any) {
    // pick females gender ='F'
    this.mothers = goats.filter((goat:any) => goat.sex === 'F');
    console.log('Mothers:', this.mothers);
  }

  //handle breed form
  onSubmitB(breedForm: NgForm){
    if (breedForm.valid){
      const formData = breedForm.value;
      formData.animal_type = 'goat';  
      formData.farm = this.farm;
      this.addBreed(formData);


    }else{
      console.log('Form is invalid');

    }
    breedForm.reset();

  }
  addBreed(formData: any) {
    this.breedService.addBreed(formData).subscribe({
      next: (data) => {
        console.log('Breed added:', data);
        this.fetchBreeds();
      },
      error: (error) => {
        console.error('Error adding breed:', error);
      },
    });

    }
  onSubmit(goatForm: NgForm) {
    if (goatForm.valid) {
      const formData = goatForm.value;
      formData.type = 'goat';  
      formData.farm = this.farm;
      formData.status = 'Alive';

      this.addAnimal(formData);

    } else {
      console.log('Form is invalid');
    }
    goatForm.reset();
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
  protected filterFathers(): void {
    console.log('filter');
    this.filteredFathers = this.fathers.filter((father:any) =>
      father.id.includes(this.fatherSearchText.toLowerCase())
    );
  }
  protected filterMothers(): void {
    this.filteredMothers = this.mothers.filter((mother:any) =>
      mother.id.includes(this.motherSearchText.toLowerCase())
    );
  }
  editGoat(goat: any) {
    console.log('Editing goat:', goat);
    this.router.navigate(['/goats/edit/',this.farm,goat.id]);

  }

  deleteGoat(id: string) {
    console.log('Deleting goat:', id);
    // Implement delete functionality (e.g., open modal for confirmation)
  }

  //view goat
  viewGoat(goatId: any){
    console.log('Viewing goat:', goatId);
    this.router.navigate(['/goat/',this.farm,goatId]);
  }
  //edit goat
  

}