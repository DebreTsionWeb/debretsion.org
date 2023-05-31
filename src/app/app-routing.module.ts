import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreen } from './Home/HomeScreen.component';
import { AppointmentScreen } from './Appointment/AppointmentScreen.component';
import { ContactScreen } from './Contact/ContactScreen.component';
import { GalleryScreen } from './Gallery/GalleryScreen.component';
import { LiveScreen } from './Live/LiveScreen.component';
import { VisitUsScreen } from './VisitUs/VisitUsScreen.component';


const routes: Routes = [
  { path: '', component: HomeScreen },
  { path: 'Appointment', component: AppointmentScreen},
  { path: 'Contact', component: ContactScreen},
  { path: 'Gallery', component: GalleryScreen},
  { path: 'Live', component: LiveScreen},
  { path: 'VisitUs', component: VisitUsScreen}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
