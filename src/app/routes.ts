import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RechercherMedComponent } from './rechercher-med/rechercher-med.component';
import { ProfilemedComponent } from './profilemed/profilemed.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LocalisezvousComponent } from './localisezvous/localisezvous.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'profilemed/:id',
      component: ProfilemedComponent ,
      title: 'Profile Médecin'
    },
    {
        path: 'RechercherMed/',
        component: RechercherMedComponent,
        title: 'Rechercher Médecin page'
      },
      {
        path: 'Connexion/',
        component: ConnexionComponent ,
        title: 'Connectez-vous'
      },
      {
        path: 'Inscription/',
        component: InscriptionComponent ,
        title: 'Inscrivez-vous'
      },
      {
        path: 'localisation/',
        component: LocalisezvousComponent ,
        title: 'Localisez-vous'
      },
  ];
  
  export default routeConfig;