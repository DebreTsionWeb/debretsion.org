import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { AboutScreen } from './AboutScreen.component';

import { HeaderComponent } from '../.GlobalComponents/Header/Header.component';
import { FooterComponent } from '../.GlobalComponents/Footer/Footer.component';
import { AboutBody } from './AboutComponents/AboutBody.component';

@NgModule({
  declarations: [
    AboutScreen,
    HeaderComponent,
    FooterComponent,
    AboutBody
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AboutScreen]
})
export class AppModule { }
