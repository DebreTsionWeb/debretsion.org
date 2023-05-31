import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { AppointmentScreen } from './AppointmentScreen.component';

import { HeaderComponent } from '../AGlobalComponents/Header/Header.component';
import { FooterComponent } from '../AGlobalComponents/Footer/Footer.component';

@NgModule({
  declarations: [
    AppointmentScreen,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppointmentScreen]
})
export class AppModule { }
