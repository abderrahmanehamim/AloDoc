import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import {  HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeadernavbarComponent } from './headernavbar/headernavbar.component';
import { HomeComponent } from './home/home.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NosServiceComponent } from './nos-service/nos-service.component';
import { CarosselComponent } from './carossel/carossel.component';
import { AproposComponent } from './apropos/apropos.component';
import { RejoigneznousComponent } from './rejoigneznous/rejoigneznous.component';
import { FooterComponent } from './footer/footer.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LocalisezvousComponent } from './localisezvous/localisezvous.component';
import { RechercherMedComponent } from './rechercher-med/rechercher-med.component';
import { MiniprofileComponent } from './miniprofile/miniprofile.component';
import { ProfilemedComponent } from './profilemed/profilemed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import routeConfig from './routes';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { PatientChangePasswordComponent } from './patient-change-password/patient-change-password.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';
import { DoctorSettingsComponent } from './doctor-settings/doctor-settings.component';
import { DoctorChangePasswordComponent } from './doctor-change-password/doctor-change-password.component';
import { DataDisplayComponent } from './data-display/data-display.component';

import { DoctorService } from './doctor.service';
import { PatientService } from './patient.service';
import { AppointmentService } from './appointment.service';
import { DatapatientdisplayComponent } from './datapatientdisplay/datapatientdisplay.component';
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';



@NgModule({
  declarations: [
  
    AppComponent,
    HeadernavbarComponent,
    HomeComponent,
    AcceuilComponent,
    NosServiceComponent,
    CarosselComponent,
    AproposComponent,
    RejoigneznousComponent,
    FooterComponent,
    InscriptionComponent,
    ConnexionComponent,
    LocalisezvousComponent,
    RechercherMedComponent,
    MiniprofileComponent,
    ProfilemedComponent,
    HousingLocationComponent,
    PatientProfileComponent,
    DoctorProfileComponent,
    PatientDashboardComponent,
    ProfileSettingsComponent,
    PatientChangePasswordComponent,
    DoctorDashboardComponent,
    DoctorAppointmentsComponent,
    DoctorSettingsComponent,
    DoctorChangePasswordComponent,
    DataDisplayComponent,
    DatapatientdisplayComponent,
    DoctorCreateComponent,
    PatientListComponent,
    AppointmentListComponent,
    AppointmentFormComponent
  ],
  imports: [  
    MbscModule, 
    MatChipsModule,
    NgFor,
    RouterModule.forRoot(routeConfig),
    BrowserModule,
    BrowserAnimationsModule,
    NgSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    DoctorService,
    PatientService,
    AppointmentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
