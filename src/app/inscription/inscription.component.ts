import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  genders = ['male', 'female', 'other']; // Options pour le champ de sélection du sexe
  submitted = false; // Variable pour suivre si le formulaire a été soumis

  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: 0,
    adresse:'' ,
    gender: '',
    phoneNumber: ''
  }; // Objet pour stocker les données du formulaire

  submitForm() {
    this.submitted = true; // Marquer le formulaire comme soumis
    console.log(this.user); // Vous pouvez traiter les données ici (envoi au serveur, validation, etc.)
  }
}
