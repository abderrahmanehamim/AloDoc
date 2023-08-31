import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';
@Injectable({
  providedIn: 'root'
})
export class ProfiledoctorService {
  
  readonly baseUrl2 = 'https://picsum.photos/200/300';
  
  generateRandomImage() {
    const randomNumber = Math.floor(Math.random() * 1000); // You can adjust the range as needed
    return `${this.baseUrl2}?random=${randomNumber}`;
  }

  DoctorprofileList: Housinglocation [] = [
    {
      id: 1,
      name: 'Bennani Fatima',
      specialite: 'Dentiste, Esthétique dentaire, Endodontiste, Orthodontiste, Pédodontiste à Casablanca',
      city: 'casablanca',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 99,
      actes: ['hollywoodsmile','whiteteeth'],
      cabinet: true,
      videocall: false,
      adomicile: false,
      adresse: '123 Rue Imaginaire' ,
      numtele: '+1234567890' ,
      numcabinet:'CAB-123',
    },
    {
      id: 2,
      name: 'El Kaddouri Samira',
      specialite: 'Gynécologue, Obstétricien à Marrakech',
      city: 'marrakech',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 75,
      actes: ['hollywoodsmile','whiteteeth'],
      cabinet: true,
      videocall: true,
      adomicile: false,
      adresse: '456 Dream Street' ,
      numtele: '+1234567890' ,
      numcabinet:'CAB-123',
    },
    {
      id: 3,
      name: 'Hassani Jamal',
      specialite: 'Cardiologue, Médecine interne à Asfi',
      city: 'asfi',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 45,
      actes: ['hollywoodsmile','whiteteeth'],
      cabinet: true,
      videocall: true,
      adomicile: false,
      adresse: '789 Enchanted Avenue' ,
      numtele: '+1234567890' ,
      numcabinet:'CAB-123',
    },
    {
      id: 4,
      name: 'Fassi Fatiha',
      specialite: 'Ophtalmologue à Casablanca',
      city: 'casablanca',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 85,
      actes: ['hollywoodsmile','whiteteeth'],
      cabinet: true,
      videocall: true,
      adomicile: false,
      adresse: '567 Starlight Lane' ,
      numtele: '+1234567890' ,
      numcabinet:'CAB-123',
    },
    {
      id: 5,
      name: 'Ouazzani Amine',
      specialite: 'Chirurgien plastique, Esthétique à Marrakech',
      city: 'marrakech',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 60,
      actes: ['hollywoodsmile','whiteteeth'],
      cabinet: true,
      videocall: true,
      adomicile: false,
      adresse: '890 Rainbow Road' ,
      numtele: '+1234567890' ,
      numcabinet:'CAB-123',
    }
  ];
  getAllProfile(): Housinglocation[] {
    return this.DoctorprofileList;
  }

  getProfileById(id: number): Housinglocation | undefined {
    return this.DoctorprofileList.find(housingLocation => housingLocation.id === id);
  }

}


