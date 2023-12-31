import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSettingsComponent } from './doctor-settings.component';

describe('DoctorSettingsComponent', () => {
  let component: DoctorSettingsComponent;
  let fixture: ComponentFixture<DoctorSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorSettingsComponent]
    });
    fixture = TestBed.createComponent(DoctorSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
