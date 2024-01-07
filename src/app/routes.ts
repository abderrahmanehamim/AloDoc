import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RechercherMedComponent } from './rechercher-med/rechercher-med.component';
import { ProfilemedComponent } from './profilemed/profilemed.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LocalisezvousComponent } from './localisezvous/localisezvous.component';

import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DashboardAdminComponent } from 'projects/alodocbackendui/src/app/dashboard-admin/dashboard-admin.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { PatientChangePasswordComponent } from './patient-change-password/patient-change-password.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';
import { DoctorSettingsComponent } from './doctor-settings/doctor-settings.component';
import { DoctorChangePasswordComponent } from './doctor-change-password/doctor-change-password.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

const routeConfig: Routes = [
  {
    path: '',
    redirectTo: 'home', // Redirect empty path to the 'home' route
    pathMatch: 'full'
  },
    {
      path: 'home',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'appointmenttable',
      component: AppointmentListComponent ,
      title: 'appointmenttable'

    },
    {
      path: 'patienttable',
      component: PatientListComponent ,
      title: 'patienttable'

    },
    {
      path: 'doctortable',
      component: DataDisplayComponent ,
      title: 'doctortable'

    },
    {
      path: 'doctorcreate',
      component: DoctorCreateComponent ,
      title: 'doctorcreate'

    },
    {
      path: 'appointmentcreate',
      component: AppointmentFormComponent,
      title: 'appointmentcreate'
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

        path: 'patient',
        component: PatientProfileComponent ,
        title: 'patientprofile'
      },
      {
        path: 'patientDashboard',
        component: PatientDashboardComponent ,
        title: 'patientDashboard'
      },
      {
        path: 'doctorprofile',
        component: DoctorProfileComponent ,
        title: 'doctorprofile'
      },
      {
        path: 'dashboard-admin',
        component: DashboardAdminComponent ,
        title: 'dashboard-admin'
      },
      {
        path: 'patientsettings',
        component: ProfileSettingsComponent ,
        title: 'patientprofilesection'
      },
      {
        path: 'Patientchangepassword',
        component: PatientChangePasswordComponent ,
        title: 'Patientchangepassword'
      },
      {
        path: 'DoctorDashboard/:id',
        component: DoctorDashboardComponent ,
        title: 'DoctorDashboard'
      },
      {
        path: 'DoctorAppointment',
        component: DoctorAppointmentsComponent ,
        title: 'DoctorAppointment'
      },
      {
        path: 'DoctorSettings',
        component: DoctorSettingsComponent ,
        title: 'DoctorSettings'
      },
      {
        path: 'Doctorchangepassword',
        component: DoctorChangePasswordComponent ,
        title: 'DoctorChangepassword'

      },
      
  ];

  export default routeConfig;
  export const AppRoutingModule = RouterModule.forRoot(routeConfig);