import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient.model';
import { Observable } from 'rxjs';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8085/api/patients';
  
   getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.apiUrl + '/' + id);
  }


  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }

  updatePatient(id: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.apiUrl + '/' + id, patient);
  }

  deletePatient(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/' + id);
  }
  createAppointment(patientId: number, appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.apiUrl}/${patientId}/appointments`, appointment);
  }

  getPatientAppointments(id: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/${id}/appointments`);
  }
}