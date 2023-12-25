import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RechercherMedComponent } from './rechercher-med/rechercher-med.component';
import { ProfilemedComponent } from './profilemed/profilemed.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LocalisezvousComponent } from './localisezvous/localisezvous.component';
import { AllDoctorsComponent } from './AdminComponent/all-doctors/all-doctors.component';
import { AppointmentsComponent } from './AdminComponent/appointments/appointments.component';
import { DashboardComponent } from './AdminComponent/dashboard/dashboard.component';
import { PatientsComponent } from './AdminComponent/patients/patients.component';

const routeConfig: Routes = [
  {
    path: '',
    redirectTo: 'Connexion', // Redirect empty path to the 'home' route
    pathMatch: 'full'
  },
    {
      path: 'home',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'profilemed/:id',
      component: ProfilemedComponent ,
      title: 'Profile Médecin'
    },
    {
        path: 'RechercherMed',
        component: RechercherMedComponent,
        title: 'Rechercher Médecin page'
      },
      {
        path: 'Connexion',
        component: ConnexionComponent ,
        title: 'Connectez-vous'
      },
      {
        path: 'Inscription',
        component: InscriptionComponent ,
        title: 'Inscrivez-vous'
      },
      {
        path: 'localisation',
        component: LocalisezvousComponent ,
        title: 'Localisez-vous'
      },
      {
        path: 'admin/dashboard',
        component: DashboardComponent,
        title: 'adminsdashboard'

      },
      {
        path: 'admin/doctors',
        component: AllDoctorsComponent,
        title: 'adminalldoctor'

      },
      {
        path: 'admin/appointments',
        component: AppointmentsComponent,
        title: 'adminallappointments'

      },
      {
        path: 'admin/patients',
        component: PatientsComponent,
        title: 'adminallpatients'

      },
  ];

  export default routeConfig;
  export const AppRoutingModule = RouterModule.forRoot(routeConfig);