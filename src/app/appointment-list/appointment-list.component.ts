import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment.model';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[] | undefined;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments() {
    this.appointmentService.getAllAppointments().subscribe(
      data => {
        this.appointments = data;
        this.fetchDoctorAndPatientDetails();
      },
      error => console.error('Error fetching appointments:', error)
    );
  }

  fetchDoctorAndPatientDetails() {
    if (this.appointments) {
      this.appointments.forEach(appointment => {
        if (appointment._links && appointment._links.doctor && appointment._links.doctor.href) {
          this.appointmentService.getDoctorByUrl(appointment._links.doctor.href).subscribe(
            doctor => {
              appointment.doctor = doctor;
              console.log('Fetched Doctor:', doctor); // Log the doctor details
            },
            error => console.error('Error fetching doctor details:', error)
          );
        }

        if (appointment._links && appointment._links.patient && appointment._links.patient.href) {
          this.appointmentService.getPatientByUrl(appointment._links.patient.href).subscribe(
            patient => {
              appointment.patient = patient;
              console.log('Fetched Patient:', patient); // Log the patient details
            },
            error => console.error('Error fetching patient details:', error)
          );
        }
      });
    }
  }

  deleteAppointment(id: number) {
    if (id) {
      this.appointmentService.deleteAppointment(id).subscribe(
        () => {
          console.log('Appointment deleted successfully');
          this.loadAppointments();
        },
        error => console.error('Error deleting appointment:', error)
      );
    }
  }

  parseTime(timeString: string): string {
    const timeParts = timeString.split(':');
    const hours = +timeParts[0];
    const minutes = +timeParts[1];
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  }
}
