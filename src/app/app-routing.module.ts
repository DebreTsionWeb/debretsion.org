import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreen } from './Home/HomeScreen.component';
import { AboutScreen } from './About/AboutScreen.component';
import { EventsScreen } from './Events/EventsScreen.component';
import { LiveScreen } from './Live/LiveScreen.component';
import { GalleryScreen } from './Gallery/GalleryScreen.component';
import { MemberScreen } from './Member/MemberScreen.component';
import { ContactScreen } from './Contact/ContactScreen.component';
import { AdminScreen} from './.Admin/AdminScreen.component';
import { AdminHome } from './.Admin/AdminComponents/AdminHome.component';
import { AdminLogin } from './.Admin/AdminComponents/AdminLogin.component';
import { AdminEvents } from './.Admin/AdminComponents/AdminEvents.component';
import { AdminGallery } from './.Admin/AdminComponents/AdminGallery.component';
import { AdminMember } from './.Admin/AdminComponents/AdminMember.component';

const routes: Routes = [
  { path: '', title: 'Home | DTKMG', component: HomeScreen },
  { path: 'About', title: 'About Us | DTKMG', component: AboutScreen},
  { path: 'Events', title: 'Events | DTKMG', component: EventsScreen},
  { path: 'Live', title: 'Live | DTKMG', component: LiveScreen},
  { path: 'Gallery', title: 'Gallery | DTKMG', component: GalleryScreen},
  { path: 'Member', title: 'Member | DTKMG', component: MemberScreen},
  { path: 'Contact', title: 'Contact Us | DTKMG', component: ContactScreen},
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
