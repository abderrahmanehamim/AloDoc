import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
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
    HousingLocationComponent
  
  ],
  imports: [
    MatChipsModule,
    NgFor,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
