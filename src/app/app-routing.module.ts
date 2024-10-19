import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeScreen } from './Home/HomeScreen.component';
import { AboutScreen } from './About/AboutScreen.component';
import { EventsScreen } from './Events/EventsScreen.component';
import { LiveScreen } from './Live/LiveScreen.component';
import { GalleryScreen } from './Gallery/GalleryScreen.component';
import { MemberScreen } from './Member/MemberScreen.component';
import { ContactScreen } from './Contact/ContactScreen.component';

import { AmharicHomeScreen } from './.Amharic/Home/HomeScreen.component';
import { AmharicAboutScreen } from './.Amharic/About/AboutScreen.component';
import { AmharicEventsScreen } from './.Amharic/Events/EventsScreen.component';
import { AmharicLiveScreen } from './.Amharic/Live/LiveScreen.component';
import { AmharicGalleryScreen } from './.Amharic/Gallery/GalleryScreen.component';
import { AmharicMemberScreen } from './.Amharic/Member/MemberScreen.component';
import { AmharicContactScreen } from './.Amharic/Contact/ContactScreen.component';

import { AdminScreen} from './.Admin/AdminScreen.component';
import { AdminLogin } from './.Admin/AdminComponents/AdminLogin.component';
import { AdminEvents } from './.Admin/AdminComponents/AdminEvents.component';
import { AdminGallery } from './.Admin/AdminComponents/AdminGallery.component';
import { AdminMember } from './.Admin/AdminComponents/AdminMember.component';

const routes: Routes = [
  { path: 'en', title: 'Home | DTKMG', component: HomeScreen },
  { path: 'en/About', title: 'About Us | DTKMG', component: AboutScreen},
  { path: 'en/Events', title: 'Events | DTKMG', component: EventsScreen},
  { path: 'en/Live', title: 'Live | DTKMG', component: LiveScreen},
  { path: 'en/Gallery', title: 'Gallery | DTKMG', component: GalleryScreen},
  { path: 'en/Donate', title: 'Donate | DTKMG', component: MemberScreen},
  { path: 'en/Contact', title: 'Contact Us | DTKMG', component: ContactScreen},

  { path: '', title: 'Home | DTKMG', component: AmharicHomeScreen },
  { path: 'About', title: 'About Us | DTKMG', component: AmharicAboutScreen},
  { path: 'Events', title: 'Events | DTKMG', component: AmharicEventsScreen},
  { path: 'Live', title: 'Live | DTKMG', component: AmharicLiveScreen},
  { path: 'Gallery', title: 'Gallery | DTKMG', component: AmharicGalleryScreen},
  { path: 'Donate', title: 'Donate | DTKMG', component: AmharicMemberScreen},
  { path: 'Contact', title: 'Contact Us | DTKMG', component: AmharicContactScreen},

  { path: 'Admin', title: 'Admin Portal | DTKMG', component: AdminScreen},
  { path: 'AdminLogin', title: 'Admin Login | DTKMG', component: AdminLogin},
  { path: 'AdminEvents', title: 'Admin Events | DTKMG', component: AdminEvents},
  { path: 'AdminGallery', title: 'Admin Gallery | DTKMG', component: AdminGallery},
  { path: 'AdminMember', title: 'Admin Member | DTKMG', component: AdminMember}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
