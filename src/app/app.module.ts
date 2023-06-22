import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './.GlobalComponents/Header.component';
import { FooterComponent } from './.GlobalComponents/Footer.component';
import { GalleryScreen } from './Gallery/GalleryScreen.component';
import { HomeScreen } from './Home/HomeScreen.component';
import { AboutScreen } from './About/AboutScreen.component';
import { ContactScreen } from './Contact/ContactScreen.component';
import { EventsScreen } from './Events/EventsScreen.component';
import { MemberScreen } from './Member/MemberScreen.component';
import { LiveScreen } from './Live/LiveScreen.component';
import { LiveBody } from './Live/LiveComponents/LiveBody.component';
import { ContactBody } from './Contact/ContactComponents/ContactBody.component';
import { GalleryBody } from './Gallery/GalleryComponents/GalleryBody.component';
import { AboutBody } from './About/AboutComponents/AboutBody.component';
import { EventsBody } from './Events/EventsComponents/EventsBody.component';
import { MemberBody } from './Member/MemberComponents/MemberBody.component';
import { MemberLogin } from './Member/MemberComponents/MemberLogin.component';
import { MemberSignup } from './Member/MemberComponents/MemberSignup.component';
import { HomeBody } from './Home/HomeComponents/HomeBody.component';
import { AdminScreen } from './.Admin/AdminScreen.component';
import { AdminHeader } from './.GlobalComponents/AdminHeader.component';
import { AdminFooter } from './.GlobalComponents/AdminFooter.component';
import { AdminLogin } from './.Admin/AdminComponents/AdminLogin.component';
import { AdminHome } from './.Admin/AdminComponents/AdminHome.component';
import { AdminEvents } from './.Admin/AdminComponents/AdminEvents.component';
import { AdminGallery } from './.Admin/AdminComponents/AdminGallery.component';
import { AdminMember } from './.Admin/AdminComponents/AdminMember.component';

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
    MemberScreen,
    LiveScreen,
    LiveBody,
    ContactBody,
    GalleryBody,
    AboutBody,
    EventsBody,
    MemberBody,
    MemberLogin,
    MemberSignup,
    HomeBody,
    AdminScreen,
    AdminHeader,
    AdminFooter,
    AdminLogin,
    AdminHome,
    AdminEvents,
    AdminGallery,
    AdminMember
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
