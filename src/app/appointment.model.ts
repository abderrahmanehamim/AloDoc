import { Patient } from "./patient.model";
import { Doctor } from "./doctor.model";
// appointment.model.ts

export interface Appointment {
    idappoint: number;
    dateappoint: Date;
    timeappoint: Date;
    acceptance: string;
    doctor: Doctor;
    patient: Patient;
    _links?: {
      doctor: {
        href: string;
      };
      patient: {
        href: string;
      };
    };
  }
  