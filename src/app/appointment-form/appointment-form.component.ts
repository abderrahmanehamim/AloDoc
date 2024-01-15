import { Component, OnInit } from '@angular/core';
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
  dateappoint!: Date;
  timeappoint!: string;
  selectedDoctorId: number = 0; 
  selectedPatientId: number = 0; 
  doctors: Doctor[] = [];
  patients: Patient[] = [];

  constructor(
    private appointmentService: AppointmentService,
    private doctorService: DoctorService,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(doctors => {
      this.doctors = doctors;
    });

    this.patientService.getAllPatients().subscribe(patients => {
      this.patients = patients;
    });
  }

  onSubmit() {
    if (this.selectedDoctorId && this.selectedPatientId) {
      const scheduleData = {
        patientId: this.selectedPatientId,
        doctorId: this.selectedDoctorId,
        date: this.dateappoint,
        time: this.timeappoint
      };
  
      this.appointmentService.scheduleAppointment(scheduleData).subscribe(
        (data: any) => {
          console.log('Appointment scheduled successfully:', data);
          
        },
        (error) => {
          console.error('Error scheduling appointment:', error);
          
        }
      );
    } else {
      console.log('Please select a doctor and a patient before submitting.');
     
    }
  }
}