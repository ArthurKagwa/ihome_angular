import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedTopNavComponent } from './authenticated-top-nav.component';

describe('AuthenticatedTopNavComponent', () => {
  let component: AuthenticatedTopNavComponent;
  let fixture: ComponentFixture<AuthenticatedTopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticatedTopNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticatedTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
