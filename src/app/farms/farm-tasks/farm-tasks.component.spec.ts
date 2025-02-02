import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmTasksComponent } from './farm-tasks.component';

describe('FarmTasksComponent', () => {
  let component: FarmTasksComponent;
  let fixture: ComponentFixture<FarmTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
