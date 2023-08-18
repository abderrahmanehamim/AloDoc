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
  myControl = new FormControl('');
  options: string[] = [
                                                                      'Addictologue',
                                                                      'Algologue - Traitement de la douleur',
                                                                      'Allergologue',
                                                                      'Allergologue-pédiatrique',
                                                                      'Anatomopathologiste',
                                                                      'Andrologue',
                                                                      'Anesthésiste-réanimateur',
                                                                      'Angiologue',
                                                                      'Audioprothésiste',
                                                                      'Auriculothérapie',
                                                                      'Biologiste (Laboratoire d\'analyse)',
                                                                      'Cardiologue',
                                                                      'Cardiologue interventionnel',
                                                                      'Cardiologue pédiatrique',
                                                                      'Cardiologue rythmologue',
                                                                      'Centre de Dialyse',
                                                                      'Chiropracteur',
                                                                      'Chirurgien cervico-facial',
                                                                      'Chirurgie buccale',
                                                                      'Chirurgien cardiaque',
                                                                      'Chirurgien cardiaque pédiatrique',
                                                                      'Chirurgien de l\'obésité',
                                                                      'Chirurgien de la main',
                                                                      'Chirurgien digestif',
                                                                      'Chirurgien du foie, du pancréas et des voies biliaires',
                                                                      'Chirurgien esthétique et plastique',
                                                                      'Chirurgien général',
                                                                      'Chirurgien maxillo-facial',
                                                                      'Chirurgien orthopédiste et traumatologue',
                                                                      'Chirurgien orthopédiste pédiatrique',
                                                                      'Chirurgien pédiatre',
                                                                      'Chirurgien thoracique',
                                                                      'Chirurgien vasculaire',
                                                                      'Chirurgien viscéral',
                                                                      'Chirurgien viscéral pédiatrique',
                                                                      'Coach développement personnel',
                                                                      'Coach sportif',
                                                                      'Dentiste',
                                                                      'Dermatologue',
                                                                      'Dermatologue pédiatrique',
                                                                      'Diabétologue',
                                                                      'Diététicien',
                                                                      'Endocrinologue',
                                                                      'Endodontiste',
                                                                      'Ergothérapie',
                                                                      'Esthétique dentaire',
                                                                      'Ethiopathe',
                                                                      'Gastro-entérologue',
                                                                      'Gastro-entérologue pédiatrique',
                                                                      'Gynécologue',
                                                                      'Gynécologue-obstétricien',
                                                                      'Généticien',
                                                                      'Gérontologue - Gériatre',
                                                                      'Homéopathe',
                                                                      'Hypnothérapeute',
                                                                      'Hématologue',
                                                                      'Hépatologue'
  ];

  DoctorprofileList: Housinglocation[] = [];
  profiledoctorService: ProfiledoctorService = inject(ProfiledoctorService);
  constructor(){

    this.DoctorprofileList = this.profiledoctorService.getAllProfile();
  }

}
