import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../doctor.model';  // Import Doctor model
import { DoctorService } from '../doctor.service';  // Import DoctorService

@Component({
  selector: 'app-profilemed',
  templateUrl: './profilemed.component.html',
  styleUrls: ['./profilemed.component.css']
})
export class ProfilemedComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  doctorService = inject(DoctorService);  // Use DoctorService
  doctor: Doctor | undefined;  // Change variable name to 'doctor'

  constructor() {
    const doctorId = parseInt(this.route.snapshot.params['id'], 10);
    this.doctorService.getDoctorById(doctorId).subscribe(doctor => {
      this.doctor = doctor;
    });
  }
}
