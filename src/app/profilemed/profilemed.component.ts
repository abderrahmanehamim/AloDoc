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
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.profiledoctorService.getProfileById(housingLocationId);
  }

}
