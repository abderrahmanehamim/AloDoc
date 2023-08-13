import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherMedComponent } from './rechercher-med.component';

describe('RechercherMedComponent', () => {
  let component: RechercherMedComponent;
  let fixture: ComponentFixture<RechercherMedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercherMedComponent]
    });
    fixture = TestBed.createComponent(RechercherMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
