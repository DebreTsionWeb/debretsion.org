import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreen } from './Home/HomeScreen.component';
import { AboutScreen } from './About/AboutScreen.component';
import { EventsScreen } from './Events/EventsScreen.component';
import { LiveScreen } from './Live/LiveScreen.component';
import { GalleryScreen } from './Gallery/GalleryScreen.component';
import { DonateScreen } from './Donate/DonateScreen.component';
import { ContactScreen } from './Contact/ContactScreen.component';

const routes: Routes = [
  { path: '', title: 'Home | Debre Tsion', component: HomeScreen },
  { path: 'About', title: 'About Us | Debre Tsion', component: AboutScreen},
  { path: 'Events', title: 'Events | Debre Tsion', component: EventsScreen},
  { path: 'Live', title: 'Live | Debre Tsion', component: LiveScreen},
  { path: 'Gallery', title: 'Gallery | Debre Tsion', component: GalleryScreen},
  { path: 'Donate', title: 'Donate | Debre Tsion', component: DonateScreen},
  { path: 'Contact', title: 'Contact Us | Debre Tsion', component: ContactScreen}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
