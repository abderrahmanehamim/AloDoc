import { Component } from '@angular/core';
import { Doctor } from '../doctor.model';
import { DoctorService } from '../doctor.service';


@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent {
  newDoctor: Doctor = {
    idDoctor: 0,
    name: '',
    email: '',
    password: '',
    specialite: '',
    city: '',
    title: '',
    photo: 'assets/img/doctors/doctor-05.jpg',
    actes: [],
    cabinet: false,
    adomicile: false,
    videocall: false,
    adresse: '',
    numtele: '',
    numcabinet: '',
    appointments: []
  };
  successMessage: string | null = null;
  errorMessage: string | null = null;
  actToAdd: string = '';

  cities: string[] = [
    'Agadir', 'Ait Melloul', 'Arfoud', 'Azrou', 'Benguérir', 'Beni Mellal', 'Benslimane', 'Berkane', 'Berrechid',
    'Bouskoura', 'Bouznika', 'Casablanca', 'Dakhla', 'Dar Bouazza', 'Deroua', 'El Jadida', 'Errachidia', 'Essaouira',
    'Fkih Ben Saleh', 'Fès', 'Had Soualem', 'Ifrane', 'Inezgane', 'Kalaat Sraghna', 'Khemisset', 'Khouribga', 'Khénifra',
    'Kénitra', 'Larache', 'Laâyoune', 'Marrakech', 'Mechra Bel Ksiri', 'Meknès', 'Mohammedia', 'Médiouna', 'Nador',
    'Ouarzazate', 'Oujda', 'Rabat', 'Safi', 'Saidia', 'Sala Al Jadida', 'Salé', 'Settat', 'Sidi Bennour', 'Sidi Kacem',
    'Skkhirat', 'Séfrou', 'Tanger', 'Taroudant', 'Tata', 'Taza', 'Temara', 'Tétouan'
  ];
  specialties: string[] = [
    'Addictologue', 'Algologue - Traitement de la douleur', 'Allergologue', 'Allergologue-pédiatrique', 'Anatomopathologiste',
    'Andrologue', 'Anesthésiste-réanimateur', 'Angiologue', 'Audioprothésiste', 'Auriculothérapie', 'Biologiste (Laboratoire d\'analyse)',
    'Cardiologue', 'Cardiologue interventionnel', 'Cardiologue pédiatrique', 'Cardiologue rythmologue', 'Centre de Dialyse', 'Chiropracteur',
    'Chirurgien cervico-facial', 'Chirurgie buccale', 'Chirurgien cardiaque', 'Chirurgien cardiaque pédiatrique', 'Chirurgien de l\'obésité',
    'Chirurgien de la main', 'Chirurgien digestif', 'Chirurgien du foie, du pancréas et des voies biliaires', 'Chirurgien esthétique et plastique',
    'Chirurgien général', 'Chirurgien maxillo-facial', 'Chirurgien orthopédiste et traumatologue', 'Chirurgien orthopédiste pédiatrique',
    'Chirurgien pédiatre', 'Chirurgien thoracique', 'Chirurgien vasculaire', 'Chirurgien viscéral', 'Chirurgien viscéral pédiatrique',
    'Coach développement personnel', 'Coach sportif', 'Dentiste', 'Dermatologue', 'Dermatologue pédiatrique', 'Diabétologue', 'Diététicien',
    'Endocrinologue', 'Endodontiste', 'Ergothérapie', 'Esthétique dentaire', 'Ethiopathe', 'Gastro-entérologue', 'Gastro-entérologue pédiatrique',
    'Gynécologue', 'Gynécologue-obstétricien', 'Généticien', 'Gérontologue - Gériatre', 'Homéopathe', 'Hypnothérapeute', 'Hématologue', 'Hépatologue',
    'Implantologiste', 'Kinésithérapeute', 'Kinésithérapeute du sport', 'Médecin du sommeil', 'Médecin du sport', 'Médecin du travail',
    'Médecin esthétique', 'Médecin généraliste', 'Médecin interniste', 'Médecin légiste', 'Médecin nucléaire', 'Médecin physique et de réadaptation',
    'Médecin urgentiste', 'Naturopathe', 'Neurochirurgien', 'Neurologue', 'Neurophysiologiste', 'Neuropsychologie', 'Neuropédiatre', 'Nutritionniste',
    'Néonatologiste', 'Néphrologue', 'Néphrologue pédiatrique', 'Obstétricien', 'Occlusodontiste', 'Oncologie pédiatrique', 'Oncologue - Cancérologue',
    'Oncologue médical', 'Ophtalmologue', 'Ophtalmologue pédiatrique', 'Orthodontiste', 'Orthophoniste', 'Orthoptiste', 'Ostéopathe',
    'Oto-rhino-laryngologiste (ORL)', 'Ozonothérapeute', 'Parodontologiste', 'Pharmacie', 'Phlébologue', 'Pneumologue', 'Podologue', 'Posturologue',
    'Proctologue', 'Psychanalyste', 'Psychiatre', 'Psychogériatre', 'Psychologue', 'Psychomotricien', 'Psychothérapeute', 'Pédiatre', 'Pédodontiste',
    'Pédopsychiatre', 'Radiologie - Echographie', 'Radiologie - IRM', 'Radiologie - Mammographie', 'Radiologie - Scanner', 'Radiologue', 'Radiothérapeute',
    'Rhumatologue', 'Rythmologue interventionnel', 'Réanimateur Médical', 'Réanimateur pédiatrique', 'Sage-femme', 'Sexologue', 'Sophrologue',
    'Stomatologue', 'Sénologue', 'Tabacologue', 'Traumato-orthopédiste pédiatrique', 'Traumatologue-orthopédiste', 'Urologue', 'Urologue pédiatrique'
  ];

  constructor(private doctorService: DoctorService) {}

  addAct() {
    if (this.actToAdd && this.actToAdd.trim() !== '') {
      this.newDoctor.actes.push(this.actToAdd.trim());
      this.actToAdd = '';
    }
  }

  removeAct(act: string) {
    const index = this.newDoctor.actes.indexOf(act);
    if (index !== -1) {
      this.newDoctor.actes.splice(index, 1);
    }
  }

  createDoctor(): void {
 
    this.doctorService.createDoctor(this.newDoctor).subscribe(
      createdDoctor => {
        console.log('Doctor created successfully:', createdDoctor);
        this.successMessage = 'Doctor created successfully.';
        this.errorMessage = null;
        
      },
      error => {
        console.error('Error creating doctor:', error);
        this.successMessage = null;
        this.errorMessage = 'Error creating doctor. Please try again.';
      }
    );
  }
}