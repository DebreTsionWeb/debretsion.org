import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { DonateScreen } from './DonateScreen.component';

import { HeaderComponent } from '../.GlobalComponents/Header/Header.component';
import { FooterComponent } from '../.GlobalComponents/Footer/Footer.component';
import { DonateBody } from './DonateComponents/DonateBody.component';

@NgModule({
  declarations: [
    DonateScreen,
    HeaderComponent,
    FooterComponent,
    DonateBody
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [DonateScreen]
})
export class AppModule { }
