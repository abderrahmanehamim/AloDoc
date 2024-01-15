// Import necessary modules
import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient.model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  genders = ['male', 'female', 'other'];
  submitted = false;
  successMessage = ''; // Add success message variable
  errorMessage = '';   // Add error message variable
  user: Patient = {
    idpatient: 0,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    age: '',
    adresse: '',
    gender: '',
    phonenumber: '',
    appointments: []
  };

  constructor(private patientService: PatientService) {}

  submitForm() {
    this.submitted = true;

    console.log(this.user);

    this.patientService.createPatient(this.user).subscribe(
      (createdPatient) => {
        console.log('Patient created successfully:', createdPatient);
        this.successMessage = 'Patient created successfully!';
        this.errorMessage = '';  // Reset error message
        this.resetForm();
      },
      (error) => {
        console.error('Error creating patient:', error);
        this.errorMessage = 'Error creating patient. Please try again.';
        this.successMessage = ''; // Reset success message
      }
    );
  }

  resetForm() {
    this.user = {
      idpatient: 0,
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      age: '',
      adresse: '',
      gender: '',
      phonenumber: '',
      appointments: []
    };
    this.submitted = false;
  }
}
