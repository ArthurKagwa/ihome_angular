import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmSidebarComponent } from './farm-sidebar.component';

describe('FarmSidebarComponent', () => {
  let component: FarmSidebarComponent;
  let fixture: ComponentFixture<FarmSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
