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

      },
      error => console.error('Error fetching appointments:', error)
    );
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
