import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmAnimalsComponent } from './farm-animals.component';

describe('FarmAnimalsComponent', () => {
  let component: FarmAnimalsComponent;
  let fixture: ComponentFixture<FarmAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmAnimalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
