import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from '../.GlobalComponents/Header/Header.component';
import { FooterComponent } from '../.GlobalComponents/Footer/Footer.component';
import { ContactBody } from './ContactComponents/ContactBody.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactBody
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
