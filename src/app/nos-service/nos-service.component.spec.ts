import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosServiceComponent } from './nos-service.component';

describe('NosServiceComponent', () => {
  let component: NosServiceComponent;
  let fixture: ComponentFixture<NosServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosServiceComponent]
    });
    fixture = TestBed.createComponent(NosServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
