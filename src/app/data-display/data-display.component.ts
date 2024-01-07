import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { AppointmentService } from '../appointment.service';
import { PatientService } from '../patient.service';
import { Doctor } from '../doctor.model';
import { Patient } from '../patient.model';
import { Appointment } from '../appointment.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  doctors: Doctor[] = [];
  patients: Patient[] = [];
  appointments: Appointment[] = [];
  doctorAppointmentsMap: Map<number, Appointment[]> = new Map();
  loading = false;
  error = false;

  constructor(
    private doctorService: DoctorService,
    private patientService: PatientService,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    this.error = false;
    console.log('Fetching data...');

    // Fetch data in parallel
    forkJoin([
      this.doctorService.getAllDoctors(),
      this.patientService.getAllPatients(),
      this.appointmentService.getAllAppointments()
    ]).subscribe(
      ([doctors, patients, appointments]) => {
        this.doctors = doctors;
        this.patients = patients;
        this.appointments = appointments;

        // Organize appointments by doctor ID
        this.organizeAppointmentsByDoctor();

        this.loading = false;
      },
      error => {
        this.error = true;
        console.error('Error fetching data:', error);
      }
    );
  }

  organizeAppointmentsByDoctor() {
    this.appointments.forEach(appointment => {
      const doctorId = appointment.doctor.idDoctor;
      if (!this.doctorAppointmentsMap.has(doctorId)) {
        this.doctorAppointmentsMap.set(doctorId, []);
      }
      this.doctorAppointmentsMap.get(doctorId)?.push(appointment);
    });
  }

  deleteDoctor(doctorId: number) {
    this.doctorService.deleteDoctor(doctorId).subscribe(
      () => {
        console.log(`Doctor with ID ${doctorId} deleted successfully.`);
        // Refresh the data after deletion
        this.fetchData();
      },
      error => {
        console.error(`Error deleting doctor with ID ${doctorId}:`, error);
      }
    );
  }
}
