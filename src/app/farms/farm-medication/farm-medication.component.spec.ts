import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmMedicationComponent } from './farm-medication.component';

describe('FarmMedicationComponent', () => {
  let component: FarmMedicationComponent;
  let fixture: ComponentFixture<FarmMedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmMedicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
