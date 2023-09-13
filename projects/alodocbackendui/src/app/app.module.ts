import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from 'projects/alodocbackendui/main-header/main-header.component';
import { MainFooterComponent } from 'projects/alodocbackendui/main-footer/main-footer.component';
import { MainSidebarComponent } from 'projects/alodocbackendui/main-sidebar/main-sidebar.component';
import { ControlSidebarComponent } from 'projects/alodocbackendui/control-sidebar/control-sidebar.component';
import { ContentWrapperComponent } from 'projects/alodocbackendui/content-wrapper/content-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent, // Declare your components here
    MainSidebarComponent, // Declare your components here
    ContentWrapperComponent, // Declare your components here
    ControlSidebarComponent, // Declare your components here
    MainFooterComponent, // Declare your components here
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
