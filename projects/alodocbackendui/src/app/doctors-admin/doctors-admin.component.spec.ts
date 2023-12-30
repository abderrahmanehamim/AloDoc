import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsAdminComponent } from './doctors-admin.component';

describe('DoctorsAdminComponent', () => {
  let component: DoctorsAdminComponent;
  let fixture: ComponentFixture<DoctorsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorsAdminComponent]
    });
    fixture = TestBed.createComponent(DoctorsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
