import { Patient } from "./patient.model";
import { Doctor } from "./doctor.model";


export interface Appointment {
    idappoint: number;
    dateappoint: Date;
    timeappoint: string; 
    acceptance: string;
    doctor: Doctor;
    patient: Patient;
   
   
  }
  