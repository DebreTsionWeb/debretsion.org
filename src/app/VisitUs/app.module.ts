import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from '../AGlobalComponents/Header/Header.component';
import { FooterComponent } from '../AGlobalComponents/Footer/Footer.component';
import { VisitUsBody } from './VisitUsComponents/VisitUsBody.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VisitUsBody
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
