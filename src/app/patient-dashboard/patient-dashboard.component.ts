import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient.model';
import  {AppointmentService} from '../appointment.service';
import { Appointment } from '../appointment.model';
@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  patientService = inject(PatientService);
  appointmentService = inject(AppointmentService);
  patient : Patient | undefined ;
  appointments: Appointment[] = [];
constructor(){
  const patientId = parseInt(this.route.snapshot.params['id'] , 10);
  this.patientService.getPatientById(patientId).subscribe( patient => {
    this.patient = patient;
    this.patientService.getPatientAppointments(patientId).subscribe(appointments => {
      this.appointments = appointments;
    });
  });
}
parseTime(time: string): string {
 
  return time;
}
}
