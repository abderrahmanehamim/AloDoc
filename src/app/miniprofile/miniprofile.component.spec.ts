import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniprofileComponent } from './miniprofile.component';

describe('MiniprofileComponent', () => {
  let component: MiniprofileComponent;
  let fixture: ComponentFixture<MiniprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniprofileComponent]
    });
    fixture = TestBed.createComponent(MiniprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
