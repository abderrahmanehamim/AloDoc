import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8085/api/patients';
   // Get all patients
   getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }

  // Get patient by ID
  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.apiUrl + '/' + id);
  }

  // Create a new patient
  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }

  // Update a patient
  updatePatient(id: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.apiUrl + '/' + id, patient);
  }

  // Delete a patient
  deletePatient(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/' + id);
  }
}