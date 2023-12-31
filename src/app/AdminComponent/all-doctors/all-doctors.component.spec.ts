import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDoctorsComponent } from './all-doctors.component';

describe('AllDoctorsComponent', () => {
  let component: AllDoctorsComponent;
  let fixture: ComponentFixture<AllDoctorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDoctorsComponent]
    });
    fixture = TestBed.createComponent(AllDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
