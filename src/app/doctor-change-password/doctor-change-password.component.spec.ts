import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorChangePasswordComponent } from './doctor-change-password.component';

describe('DoctorChangePasswordComponent', () => {
  let component: DoctorChangePasswordComponent;
  let fixture: ComponentFixture<DoctorChangePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorChangePasswordComponent]
    });
    fixture = TestBed.createComponent(DoctorChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
