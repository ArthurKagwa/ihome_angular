import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmStaffComponent } from './farm-staff.component';

describe('FarmStaffComponent', () => {
  let component: FarmStaffComponent;
  let fixture: ComponentFixture<FarmStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmStaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
