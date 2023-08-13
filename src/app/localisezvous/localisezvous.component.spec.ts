import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalisezvousComponent } from './localisezvous.component';

describe('LocalisezvousComponent', () => {
  let component: LocalisezvousComponent;
  let fixture: ComponentFixture<LocalisezvousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalisezvousComponent]
    });
    fixture = TestBed.createComponent(LocalisezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
