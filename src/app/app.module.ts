import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './env';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

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

import { AmharicHeaderComponent } from './.GlobalComponents/AmharicHeader.component';
import { AmharicGalleryScreen } from './.Amharic/Gallery/GalleryScreen.component';
import { AmharicHomeScreen } from './.Amharic/Home/HomeScreen.component';
import { AmharicAboutScreen } from './.Amharic/About/AboutScreen.component';
import { AmharicContactScreen } from './.Amharic/Contact/ContactScreen.component';
import { AmharicEventsScreen } from './.Amharic/Events/EventsScreen.component';
import { AmharicMemberScreen } from './.Amharic/Member/MemberScreen.component';
import { AmharicLiveScreen } from './.Amharic/Live/LiveScreen.component';
import { AmharicLiveBody } from './.Amharic/Live/LiveComponents/LiveBody.component';
import { AmharicContactBody } from './.Amharic/Contact/ContactComponents/ContactBody.component';
import { AmharicGalleryBody } from './.Amharic/Gallery/GalleryComponents/GalleryBody.component';
import { AmharicAboutBody } from './.Amharic/About/AboutComponents/AboutBody.component';
import { AmharicEventsBody } from './.Amharic/Events/EventsComponents/EventsBody.component';
import { AmharicMemberBody } from './.Amharic/Member/MemberComponents/MemberBody.component';
import { AmharicMemberLogin } from './.Amharic/Member/MemberComponents/MemberLogin.component';
import { AmharicMemberSignup } from './.Amharic/Member/MemberComponents/MemberSignup.component';
import { AmharicHomeBody } from './.Amharic/Home/HomeComponents/HomeBody.component';

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

    AmharicHeaderComponent,
    AmharicGalleryScreen,
    AmharicHomeScreen,
    AmharicAboutScreen,
    AmharicContactScreen,
    AmharicEventsScreen,
    AmharicMemberScreen,
    AmharicLiveScreen,
    AmharicLiveBody,
    AmharicContactBody,
    AmharicGalleryBody,
    AmharicAboutBody,
    AmharicEventsBody,
    AmharicMemberBody,
    AmharicMemberLogin,
    AmharicMemberSignup,
    AmharicHomeBody,

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
    AppRoutingModule,
    LazyLoadImageModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
