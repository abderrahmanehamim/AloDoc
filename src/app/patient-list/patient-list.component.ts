import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] | undefined;
  

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients() {
    this.patientService.getAllPatients().subscribe(
      data => this.patients = data,
      error => console.error('Error fetching patients:', error)
    );
  }

  deletePatient(id: number) {
    console.log('Deleting patient with id:', id);
    this.patientService.deletePatient(id).subscribe(
      () => {
        console.log('Patient deleted successfully');
        // Manually update the patient list without calling loadPatients()
        this.patients = this.patients?.filter(patient => patient.idpatient !== id);
      },
      error => console.error('Error deleting patient:', error)
    );
  }

}
