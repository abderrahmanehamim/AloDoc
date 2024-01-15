import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor.model';
import { Appointment } from './appointment.model';
import { Patient } from './patient.model';
import { ScheduleAppointmentData } from './scheduleAppointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8085/api/appointments';
  constructor(private http: HttpClient) { }

  
  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiUrl);
  }

getAppointmentById(id: number): Observable<Appointment> {
  return this.http.get<Appointment>(this.apiUrl + '/' + id);
}

getDoctorAppointments(doctorId: number): Observable<Appointment[]> {
  return this.http.get<Appointment[]>(this.apiUrl + '/doctors/' + doctorId + '/appointments');
}

getPatientByUrl(url: string): Observable<Patient> {
  console.log('Patient URL:', url); 
  return this.http.get<Patient>(url);
}
 
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.apiUrl, appointment);
  }
    
    updateAppointment(id: number, appointment: Appointment): Observable<Appointment> {
      return this.http.put<Appointment>(this.apiUrl + '/' + id, appointment);
    }

 deleteAppointment(id: number): Observable<void> {
  return this.http.delete<void>(this.apiUrl + '/' + id);
}
scheduleAppointment(data: ScheduleAppointmentData): Observable<Appointment> {

  const formattedDate = data.date.toISOString().split('T')[0];
  return this.http.post<Appointment>(`${this.apiUrl}/schedule?patientId=${data.patientId}&doctorId=${data.doctorId}&date=${formattedDate}&time=${data.time}`, {});
}
}