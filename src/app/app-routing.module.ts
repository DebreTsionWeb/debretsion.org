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
  { path: '', title: 'Home | Debre Tsion', component: HomeScreen },
  { path: 'About', title: 'About Us | Debre Tsion', component: AboutScreen},
  { path: 'Events', title: 'Events | Debre Tsion', component: EventsScreen},
  { path: 'Live', title: 'Live | Debre Tsion', component: LiveScreen},
  { path: 'Gallery', title: 'Gallery | Debre Tsion', component: GalleryScreen},
  { path: 'Member', title: 'Member | Debre Tsion', component: MemberScreen},
  { path: 'Contact', title: 'Contact Us | Debre Tsion', component: ContactScreen},
  { path: 'Admin', title: 'Admin Portal | Debre Tsion', component: AdminScreen},
  { path: 'AdminHome', title: 'Admin Home | Debre Tsion', component: AdminHome},
  { path: 'AdminLogin', title: 'Admin Login | Debre Tsion', component: AdminLogin},
  { path: 'AdminEvents', title: 'Admin Events | Debre Tsion', component: AdminEvents},
  { path: 'AdminGallery', title: 'Admin Gallery | Debre Tsion', component: AdminGallery},
  { path: 'AdminMember', title: 'Admin Member | Debre Tsion', component: AdminMember}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
