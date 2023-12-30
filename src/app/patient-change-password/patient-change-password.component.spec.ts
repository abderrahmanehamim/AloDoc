import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChangePasswordComponent } from './patient-change-password.component';

describe('PatientChangePasswordComponent', () => {
  let component: PatientChangePasswordComponent;
  let fixture: ComponentFixture<PatientChangePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientChangePasswordComponent]
    });
    fixture = TestBed.createComponent(PatientChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
