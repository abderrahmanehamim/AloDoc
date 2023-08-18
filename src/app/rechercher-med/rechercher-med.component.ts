import { Component, inject } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { ProfiledoctorService } from '../profiledoctor.service';
@Component({
  selector: 'app-rechercher-med',
  templateUrl: './rechercher-med.component.html',
  styleUrls: ['./rechercher-med.component.css']
})
export class RechercherMedComponent {
  DoctorprofileList: Housinglocation[] = [];
  profiledoctorService: ProfiledoctorService = inject(ProfiledoctorService);
  constructor(){

    this.DoctorprofileList = this.profiledoctorService.getAllProfile();
  }

}
