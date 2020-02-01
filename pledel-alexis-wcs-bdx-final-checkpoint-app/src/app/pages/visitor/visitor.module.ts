import { HomeComponent } from './home/home/home.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatChipsModule } from '@angular/material/chips';
import { VisitorRoutingModule } from './visitor-routing.module';
import { FormComponent } from './components/form/form.component';

import { LoginComponent } from './authentification/login.component';
import { MatButtonModule } from '@angular/material/button';
// import { RegisterComponent } from './register/register/register.component';
import { MatSnackBarModule } from '@angular/material';
import { ArtistsComponent } from './artists/artists.component';
import { AnimalsComponent } from './animals/animals.component';
import { NumerosComponent } from './numeros/numeros.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    FormComponent,
    LoginComponent,
    // RegisterComponent,
    ArtistsComponent,
    AnimalsComponent,
    NumerosComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatGridListModule,
    VisitorRoutingModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class VisitorModule { }
