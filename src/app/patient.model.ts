import { Appointment } from './appointment.model';
export interface Patient {
    idPatient: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    age: string;
    adresse: string;
    gender: string;
    phonenumber: string;
    appointments: Appointment;
  }