import { Component, inject } from '@angular/core';
import { Doctor } from '../doctor.model';  
import { DoctorService } from '../doctor.service';  

@Component({
  selector: 'app-rechercher-med',
  templateUrl: './rechercher-med.component.html',
  styleUrls: ['./rechercher-med.component.css']
})
export class RechercherMedComponent {
  filteredDoctorList: Doctor[] = [];
  doctorList: Doctor[] = [];
  doctorService: DoctorService = inject(DoctorService);

  constructor() {
    this.doctorService.getAllDoctors().subscribe((doctorList: Doctor[]) => {
      this.doctorList = doctorList;
      this.filteredDoctorList = doctorList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredDoctorList = this.doctorList;
    }

    this.filteredDoctorList = this.doctorList.filter(
      doctor => doctor?.specialite.toLowerCase().includes(text.toLowerCase())
    );
  }
}
