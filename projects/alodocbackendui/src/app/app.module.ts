import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AppointmentsAdminComponent } from './appointments-admin/appointments-admin.component';
import { DoctorsAdminComponent } from './doctors-admin/doctors-admin.component';

@NgModule({
  declarations: [
    AppComponent,
 DashboardAdminComponent,
 AppointmentsAdminComponent,
 DoctorsAdminComponent, // Declare your components here
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
