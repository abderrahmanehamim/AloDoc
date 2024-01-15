import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinidoctorviewComponent } from './minidoctorview.component';

describe('MinidoctorviewComponent', () => {
  let component: MinidoctorviewComponent;
  let fixture: ComponentFixture<MinidoctorviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinidoctorviewComponent]
    });
    fixture = TestBed.createComponent(MinidoctorviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
