import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor.model';
import { Appointment } from './appointment.model';
import { Patient } from './patient.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8085/api/appointments';
  constructor(private http: HttpClient) { }

  // Get all appointments
  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiUrl);
  }
// Get appointment by ID
getAppointmentById(id: number): Observable<Appointment> {
  return this.http.get<Appointment>(this.apiUrl + '/' + id);
}
getDoctorById(doctorId: number): Observable<Doctor> {
  const doctorUrl = `http://localhost:8085/doctors/${doctorId}`;
  return this.http.get<Doctor>(doctorUrl);
}

getPatientById(patientId: number): Observable<Patient> {
  const patientUrl = `http://localhost:8085/patients/${patientId}`;
  return this.http.get<Patient>(patientUrl);
}
getDoctorByUrl(url: string): Observable<Doctor> {
  console.log('Doctor URL:', url); // Add this line to log the URL
  return this.http.get<Doctor>(url);
}

getPatientByUrl(url: string): Observable<Patient> {
  console.log('Patient URL:', url); // Add this line to log the URL
  return this.http.get<Patient>(url);
}
  // Create a new appointment
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.apiUrl, appointment);
  }
    // Update an appointment
    updateAppointment(id: number, appointment: Appointment): Observable<Appointment> {
      return this.http.put<Appointment>(this.apiUrl + '/' + id, appointment);
    }
 // Delete an appointment
 deleteAppointment(id: number): Observable<void> {
  return this.http.delete<void>(this.apiUrl + '/' + id);
}
}
