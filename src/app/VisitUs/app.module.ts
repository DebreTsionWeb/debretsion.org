import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { VisitUsScreen } from './VisitUsScreen.component';

import { HeaderComponent } from '../AGlobalComponents/Header/Header.component';
import { FooterComponent } from '../AGlobalComponents/Footer/Footer.component';
import { VisitUsBody } from './VisitUsComponents/VisitUsBody.component';

@NgModule({
  declarations: [
    VisitUsScreen,
    HeaderComponent,
    FooterComponent,
    VisitUsBody
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [VisitUsScreen]
})
export class AppModule { }