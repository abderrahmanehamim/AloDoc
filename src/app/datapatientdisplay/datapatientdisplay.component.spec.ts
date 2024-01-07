import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapatientdisplayComponent } from './datapatientdisplay.component';

describe('DatapatientdisplayComponent', () => {
  let component: DatapatientdisplayComponent;
  let fixture: ComponentFixture<DatapatientdisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatapatientdisplayComponent]
    });
    fixture = TestBed.createComponent(DatapatientdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
