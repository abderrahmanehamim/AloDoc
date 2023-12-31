import { Component, inject  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Housinglocation } from '../housinglocation';
import { ProfiledoctorService } from '../profiledoctor.service';
import { setOptions, localeAr } from '@mobiscroll/angular';

setOptions({
  responsive: 'small',
  locale: localeAr,
  theme: 'ios',
  themeVariant: 'light',
  
});
@Component({
  selector: 'app-profilemed',
  templateUrl: './profilemed.component.html',
  styleUrls: ['./profilemed.component.css']
})
export class ProfilemedComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  profiledoctorService = inject(ProfiledoctorService);
  housingLocation: Housinglocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    Phonenumber: new FormControl(''),
    appointmentDate: new FormControl(''),
    appointmentTime: new FormControl(''),
  });
  submitApplication() {
    this.profiledoctorService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.Phonenumber ?? '',
      this.applyForm.value.appointmentDate ?? '',
      this.applyForm.value.appointmentTime ?? '');
  }
  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.profiledoctorService.getProfileById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }
  /*constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.profiledoctorService.getProfileById(housingLocationId);
  }
*/
}
