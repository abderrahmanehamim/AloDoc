import { Component, inject } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import {MatChipsModule} from '@angular/material/chips';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { ProfiledoctorService } from '../profiledoctor.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
@Component({
  selector: 'app-rechercher-med',
  templateUrl: './rechercher-med.component.html',
  styleUrls: ['./rechercher-med.component.css']
})
export class RechercherMedComponent {
  filteredprofileList: Housinglocation[] = [];
  DoctorprofileList: Housinglocation[] = [];
  profiledoctorService: ProfiledoctorService = inject(ProfiledoctorService);
  constructor(){
    this.DoctorprofileList = this.profiledoctorService.getAllProfile();
    this.filteredprofileList = this.DoctorprofileList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredprofileList = this.DoctorprofileList;
    }
  
    this.filteredprofileList = this.DoctorprofileList.filter(
      housingLocation => housingLocation?.specialite.toLowerCase().includes(text.toLowerCase())
    );
 
  }

}
