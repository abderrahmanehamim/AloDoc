import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { Doctor } from '../doctor.model';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from '../appointment.model';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {
  doctor: Doctor | undefined;
  appointments: Appointment[] = [];

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private appointmentService: AppointmentService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const doctorId = parseInt(this.route.snapshot.params['id'], 10);

    this.doctorService.getDoctorById(doctorId).subscribe(
      (doctor) => {
        this.doctor = doctor;
        this.loadAppointments(doctorId);
      },
      (error) => {
        console.error('Error fetching doctor details:', error);
      }
    );
  }

  private loadAppointments(doctorId: number): void {
    this.doctorService.getDoctorAppointments(doctorId).subscribe(
      (appointments) => {
        this.appointments = appointments;
      },
      (error) => {
        console.error('Error fetching doctor appointments:', error);
      }
    );
  }
  parseTime(time: string): string {
 
    return time;
  }
  acceptAppointment(appointmentId: number): void {
    const doctorId = this.doctor?.idDoctor || 0;
    this.doctorService.updateAppointmentAcceptance(doctorId, appointmentId, 'accepted').subscribe(
      (updatedAppointment) => {
      
        console.log('Appointment accepted successfully:', updatedAppointment);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error accepting appointment:', error);
      }
    );
  }

  refuseAppointment(appointmentId: number): void {
    const doctorId = this.doctor?.idDoctor || 0;
    this.doctorService.updateAppointmentAcceptance(doctorId, appointmentId, 'refused').subscribe(
      (updatedAppointment) => {
       
        console.log('Appointment refused successfully:', updatedAppointment);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error refusing appointment:', error);
      }
    );
  }
}
