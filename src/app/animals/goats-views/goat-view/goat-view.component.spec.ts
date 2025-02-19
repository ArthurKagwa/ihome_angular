import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoatViewComponent } from './goat-view.component';

describe('GoatViewComponent', () => {
  let component: GoatViewComponent;
  let fixture: ComponentFixture<GoatViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoatViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
