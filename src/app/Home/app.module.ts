import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { HomeScreen } from './HomeScreen.component';

import { HeaderComponent } from '../.GlobalComponents/Header/Header.component';
import { FooterComponent } from '../.GlobalComponents/Footer/Footer.component';
import { HomeBody } from './HomeComponents/HomeBody.component';

@NgModule({
  declarations: [
    HomeScreen,
    HeaderComponent,
    FooterComponent,
    HomeBody
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomeScreen]
})
export class AppModule { }
