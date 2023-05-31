import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreen } from './Home/HomeScreen.component';
import { AppointmentScreen } from './Appointment/AppointmentScreen.component';
import { ContactScreen } from './Contact/ContactScreen.component';
import { GalleryScreen } from './Gallery/GalleryScreen.component';
import { LiveScreen } from './Live/LiveScreen.component';
import { VisitUsScreen } from './VisitUs/VisitUsScreen.component';


const routes: Routes = [
  { path: '', title: 'Home | Debre Tsion', component: HomeScreen },
  { path: 'Appointment', title: 'Appointments | Debre Tsion', component: AppointmentScreen},
  { path: 'Contact', title: 'Contact | Debre Tsion', component: ContactScreen},
  { path: 'Gallery', title: 'Gallery | Debre Tsion', component: GalleryScreen},
  { path: 'Live', title: 'Lives | Debre Tsion', component: LiveScreen},
  { path: 'VisitUs', title: 'Visit Us | Debre Tsion', component: VisitUsScreen}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
