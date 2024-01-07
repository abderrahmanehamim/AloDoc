import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor.model';
import { Appointment } from './appointment.model';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8085/api/doctors';
   // Get all doctors
   getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }

  // Get doctor by ID
  getDoctorById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(this.apiUrl + '/' + id);
  }

  // Create a new doctor
  createDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.apiUrl, doctor);
  }

  // Update a doctor
  updateDoctor(id: number, doctor: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(this.apiUrl + '/' + id, doctor);
  }

  // Delete a doctor
  deleteDoctor(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/' + id);
  }

  // Get appointments for a doctor
  getDoctorAppointments(doctorId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiUrl + '/doctors/' + doctorId + '/appointments');
  }

  // Update appointment acceptance
  updateAppointmentAcceptance(doctorId: number, appointmentId: number, acceptance: string): Observable<Appointment> {
    return this.http.put<Appointment>(this.apiUrl + '/' + doctorId + '/appointments/' + appointmentId, { acceptance });
  }
}
