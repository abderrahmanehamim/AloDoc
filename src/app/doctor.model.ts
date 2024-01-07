import { Appointment } from "./appointment.model";
export interface Doctor {
    idDoctor: number;
    name: string;
    email: string;
    password: string;
    specialite: string;
    city: string;
    title: string;
    photo: string;
    actes: string[];
    cabinet: boolean;
    adomicile: boolean;
    videocall: boolean;
    adresse: string;
    numtele: string;
    numcabinet: string;
    appointments: Appointment[];
  }