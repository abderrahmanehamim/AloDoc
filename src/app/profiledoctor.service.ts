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
      cabinet: true,
      videocall: false,
      adomicile: false
    },
    {
      id: 2,
      name: 'El Kaddouri Samira',
      specialite: 'Gynécologue, Obstétricien à Marrakech',
      city: 'marrakech',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 75,
      cabinet: true,
      videocall: true,
      adomicile: false
    },
    {
      id: 3,
      name: 'Hassani Jamal',
      specialite: 'Cardiologue, Médecine interne à Asfi',
      city: 'asfi',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 45,
      cabinet: true,
      videocall: false,
      adomicile: true
    },
    {
      id: 4,
      name: 'Fassi Fatiha',
      specialite: 'Ophtalmologue à Casablanca',
      city: 'casablanca',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 85,
      cabinet: true,
      videocall: true,
      adomicile: false
    },
    {
      id: 5,
      name: 'Ouazzani Amine',
      specialite: 'Chirurgien plastique, Esthétique à Marrakech',
      city: 'marrakech',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 60,
      cabinet: true,
      videocall: false,
      adomicile: true
    },
    {
      id: 11,
      name: 'Moussa Ahmed',
      specialite: 'Neurologue, Neurochirurgie à Rabat',
      city: 'rabat',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 80,
      cabinet: true,
      videocall: false,
      adomicile: false
    },
    {
      id: 12,
      name: 'Touzani Karima',
      specialite: 'Pédiatre à Fes',
      city: 'fes',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 70,
      cabinet: true,
      videocall: true,
      adomicile: false
    },
    {
      id: 13,
      name: 'Benjelloun Leila',
      specialite: 'Dermatologue, Dermatologie esthétique à Casablanca',
      city: 'casablanca',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 90,
      cabinet: true,
      videocall: false,
      adomicile: true
    },
    {
      id: 14,
      name: 'Zouhair Noura',
      specialite: 'Chirurgien orthopédiste, Traumatologie à Marrakech',
      city: 'marrakech',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 50,
      cabinet: true,
      videocall: false,
      adomicile: false
    },
    {
      id: 15,
      name: 'Ait Haddi Ahmed',
      specialite: 'Cardiologue, Cardiologie interventionnelle à Casablanca',
      city: 'casablanca',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 65,
      cabinet: true,
      videocall: true,
      adomicile: true
    },
    {
      id: 16,
      name: 'Lahmidi Amina',
      specialite: 'Ophtalmologue, Chirurgie réfractive à Rabat',
      city: 'rabat',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 75,
      cabinet: true,
      videocall: true,
      adomicile: false
    },
    {
      id: 16,
      name: 'Tazi Karim',
      specialite: 'Radiologue, Imagerie médicale à Asfi',
      city: 'asfi',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 70,
      cabinet: true,
      videocall: true,
      adomicile: false
    },{
      id: 17,
      name: 'Sidiq Ali',
      specialite: 'Psychiatre, Thérapie cognitive et comportementale à Tangier',
      city: 'tangier',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 70,
      cabinet: true,
      videocall: false,
      adomicile: false
    },
    {
      id: 18,
      name: 'Ouali Farida',
      specialite: 'Médecin généraliste à Agadir',
      city: 'agadir',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 85,
      cabinet: true,
      videocall: true,
      adomicile: false
    },
    {
      id: 19,
      name: 'Belkadi Karim',
      specialite: 'Chirurgien cardiovasculaire, Chirurgie cardiaque à Marrakech',
      city: 'marrakech',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 60,
      cabinet: true,
      videocall: false,
      adomicile: true
    },
    {
      id: 20,
      name: 'Rachidi Salma',
      specialite: 'Endocrinologue, Diabétologie à Fes',
      city: 'fes',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 75,
      cabinet: true,
      videocall: true,
      adomicile: false
    },
    {
      id: 21,
      name: 'Hakimi Nadia',
      specialite: 'Urologue, Chirurgie urologique à Casablanca',
      city: 'casablanca',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 55,
      cabinet: true,
      videocall: true,
      adomicile: false
    },
    {
      id: 22,
      name: 'Mansour Youssef',
      specialite: 'Rhumatologue, Médecine physique et réadaptation à Rabat',
      city: 'rabat',
      title: 'Dr',
      photo: this.generateRandomImage(),
      Rdvconfirmer: 70,
      cabinet: true,
      videocall: false,
      adomicile: true
    }
  ];
  getAllProfile(): Housinglocation[] {
    return this.DoctorprofileList;
  }

  getProfileById(id: number): Housinglocation | undefined {
    return this.DoctorprofileList.find(housingLocation => housingLocation.id === id);
  }

}


