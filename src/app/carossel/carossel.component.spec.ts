import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarosselComponent } from './carossel.component';

describe('CarosselComponent', () => {
  let component: CarosselComponent;
  let fixture: ComponentFixture<CarosselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarosselComponent]
    });
    fixture = TestBed.createComponent(CarosselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
