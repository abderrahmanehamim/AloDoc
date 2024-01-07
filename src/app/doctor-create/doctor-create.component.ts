import { Component } from '@angular/core';
import { Doctor } from '../doctor.model';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent {
  newDoctor: Doctor = {
    idDoctor: 0,
    name: '',
    email: '',
    password: '',
    specialite: '',
    city: '',
    title: '',
    photo: '',
    actes: [],
    cabinet: false,
    adomicile: false,
    videocall: false,
    adresse: '',
    numtele: '',
    numcabinet: '',
    appointments: []
  };
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private doctorService: DoctorService) {}

  createDoctor() {
    this.doctorService.createDoctor(this.newDoctor).subscribe(
      createdDoctor => {
        console.log('Doctor created successfully:', createdDoctor);
        this.successMessage = 'Doctor created successfully.';
        this.errorMessage = null;
        // Reset the form or perform any other necessary actions
      },
      error => {
        console.error('Error creating doctor:', error);
        this.successMessage = null;
        this.errorMessage = 'Error creating doctor. Please try again.';
      }
    );
  }
}
