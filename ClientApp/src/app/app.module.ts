import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimerComponent } from './components/timer/timer/timer.component';
import { TimeComponent } from './components/time/time/time.component';

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FormsModule } from '@angular/forms';
import { TimeListComponent } from './components/time-list/time-list/time-list.component';
import { TimeBadgeComponent } from './components/time-badge/time-badge/time-badge.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimerComponent,
    TimeComponent,
    TimeListComponent,
    TimeBadgeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxMaterialTimepickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
