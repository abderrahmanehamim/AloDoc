import { Component, OnInit, inject } from '@angular/core';
import { Doctor } from '../doctor.model';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from '../appointment.model';
import { Patient } from '../patient.model';


@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {
  doctorId!: number;
  doctor!: Doctor;
  appointments!: Appointment[];

  constructor(private doctorService: DoctorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.doctorId = +params['id']; // (+) converts string 'id' to a number

      // Fetch doctor details
      this.doctorService.getDoctorById(this.doctorId).subscribe(doctor => {
        this.doctor = doctor;
      });

      // Fetch doctor appointments
      this.doctorService.getDoctorAppointments(this.doctorId).subscribe(appointments => {
        this.appointments = appointments;
      });
    });
  }

  acceptAppointment(appointmentId: number) {
    // Call the service method to update acceptance status
    this.doctorService.updateAppointmentAcceptance(this.doctorId, appointmentId, 'accepted').subscribe(updatedAppointment => {
      // Update the local list of appointments or handle as needed
      const index = this.appointments.findIndex(appointment => appointment.idappoint === updatedAppointment.idappoint);
      if (index !== -1) {
        this.appointments[index] = updatedAppointment;
      }
    });
  }

  refuseAppointment(appointmentId: number) {
    // Call the service method to update refusal status
    this.doctorService.updateAppointmentAcceptance(this.doctorId, appointmentId, 'refused').subscribe(updatedAppointment => {
      // Update the local list of appointments or handle as needed
      const index = this.appointments.findIndex(appointment => appointment.idappoint === updatedAppointment.idappoint);
      if (index !== -1) {
        this.appointments[index] = updatedAppointment;
      }
    });
  }
}