import { Component } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
@Component({
  selector: 'app-rechercher-med',
  templateUrl: './rechercher-med.component.html',
  styleUrls: ['./rechercher-med.component.css']
})
export class RechercherMedComponent {
  Villes = ["casablanca","marrakech","asfi"];
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  
  housingLocation: Housinglocation = {
    id: 9999,
    name: 'Bennani Fatima',
    specialite: 'Dentiste, Esthétique dentaire, Endodontiste, Orthodontiste, Pédodontiste à Casablanca',
    city: 'casablanca',
    title: 'Dr',
    photo: `${this.baseUrl}/example-house.jpg`,
    Rdvconfirmer: 99,
    cabinet: true,
    videocall: false,
    adomicile: false
  };
}
