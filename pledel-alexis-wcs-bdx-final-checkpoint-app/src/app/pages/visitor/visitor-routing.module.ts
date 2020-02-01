import { HomeComponent } from './home/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './authentification/login.component';
// import { RegisterComponent } from './register/register/register.component';
import { AnimalsComponent } from './animals/animals.component';
import { ArtistsComponent } from './artists/artists.component';
import { NumerosComponent } from './numeros/numeros.component';
import { EventsComponent } from './events/events.component';

// routes définition
const visiteurRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'numeros', component: NumerosComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(visiteurRoutes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
