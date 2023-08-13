import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejoigneznousComponent } from './rejoigneznous.component';

describe('RejoigneznousComponent', () => {
  let component: RejoigneznousComponent;
  let fixture: ComponentFixture<RejoigneznousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejoigneznousComponent]
    });
    fixture = TestBed.createComponent(RejoigneznousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
