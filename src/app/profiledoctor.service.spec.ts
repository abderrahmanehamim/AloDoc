import { TestBed } from '@angular/core/testing';

import { ProfiledoctorService } from './profiledoctor.service';

describe('ProfiledoctorService', () => {
  let service: ProfiledoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfiledoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
