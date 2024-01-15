import { Appointment } from './appointment.model';
export interface Patient {
  idpatient: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  age: string;
  adresse: string;
  gender: string;
  phonenumber: string;
  appointments: Appointment[];
}
