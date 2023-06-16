import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './.GlobalComponents/Header/Header.component';
import { FooterComponent } from './.GlobalComponents/Footer/Footer.component';
import { GalleryScreen } from './Gallery/GalleryScreen.component';
import { HomeScreen } from './Home/HomeScreen.component';
import { AboutScreen } from './About/AboutScreen.component';
import { ContactScreen } from './Contact/ContactScreen.component';
import { EventsScreen } from './Events/EventsScreen.component';
import { DonateScreen } from './Donate/DonateScreen.component';
import { LiveScreen } from './Live/LiveScreen.component';
import { ContactBody } from './Contact/ContactComponents/ContactBody.component';
import { GalleryBody } from './Gallery/GalleryComponents/GalleryBody.component';
import { AboutBody } from './About/AboutComponents/AboutBody.component';
import { EventsBody } from './Events/EventsComponents/EventsBody.component';
import { DonateBody } from './Donate/DonateComponents/DonateBody.component';
import { LiveBody } from './Live/LiveComponents/LiveBody.component';
import { HomeBody } from './Home/HomeComponents/HomeBody.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GalleryScreen,
    HomeScreen,
    AboutScreen,
    ContactScreen,
    EventsScreen,
    DonateScreen,
    LiveScreen,
    ContactBody,
    GalleryBody,
    AboutBody,
    EventsBody,
    DonateBody,
    LiveBody,
    HomeBody
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
