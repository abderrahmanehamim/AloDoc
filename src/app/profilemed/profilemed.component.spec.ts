import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilemedComponent } from './profilemed.component';

describe('ProfilemedComponent', () => {
  let component: ProfilemedComponent;
  let fixture: ComponentFixture<ProfilemedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilemedComponent]
    });
    fixture = TestBed.createComponent(ProfilemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
