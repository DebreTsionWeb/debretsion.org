import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { EventsScreen } from './EventsScreen.component';

import { HeaderComponent } from '../.GlobalComponents/Header/Header.component';
import { FooterComponent } from '../.GlobalComponents/Footer/Footer.component';
import { EventsBody } from './EventsComponents/EventsBody.component';

@NgModule({
  declarations: [
    EventsScreen,
    HeaderComponent,
    FooterComponent,
    EventsBody
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EventsScreen]
})
export class AppModule { }