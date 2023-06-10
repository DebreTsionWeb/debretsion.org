import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { LiveScreen } from './LiveScreen.component';

import { HeaderComponent } from '../.GlobalComponents/Header/Header.component';
import { FooterComponent } from '../.GlobalComponents/Footer/Footer.component';
import { LiveBody } from './LiveComponents/LiveBody.component';

@NgModule({
  declarations: [
    LiveScreen,
    HeaderComponent,
    FooterComponent,
    LiveBody
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LiveScreen]
})
export class AppModule { }
