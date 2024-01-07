// appointment-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { DoctorService } from '../doctor.service';
import { PatientService } from '../patient.service';
import { Doctor } from '../doctor.model';
import { Patient } from '../patient.model';
import { Appointment } from '../appointment.model';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  appointmentForm!: FormGroup; // Add ! to declare it as possibly undefined

  doctors: Doctor[] = [];
  patients: Patient[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private appointmentService: AppointmentService,
    private doctorService: DoctorService, // Add doctorService injection
    private patientService: PatientService, // Add patientService injection
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      dateappoint: ['', Validators.required],
      timeappoint: ['', Validators.required],
      acceptance: ['', Validators.required],
      doctorId: ['', Validators.required],
      patientId: ['', Validators.required]
    });

    // Fetch doctors and patients for dropdowns
    this.doctorService.getAllDoctors().subscribe(doctors => {
      this.doctors = doctors;
    });

    this.patientService.getAllPatients().subscribe(patients => {
      this.patients = patients;
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      const newAppointment: Appointment = this.appointmentForm.value;
      this.appointmentService.createAppointment(newAppointment).subscribe(
        () => {
          console.log('Appointment created successfully');
          // Redirect or perform any other action after creating appointment
        },
        error => console.error('Error creating appointment:', error)
      );
    }
  }
}
