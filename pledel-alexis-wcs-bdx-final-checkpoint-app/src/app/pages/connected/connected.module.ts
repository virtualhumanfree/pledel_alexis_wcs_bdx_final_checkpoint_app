import { EventsComponent } from './pages/events/events.component';
import { MatTableModule, MatHeaderRowDef, MatRowDef } from '@angular/material/table';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ConnectedRoutingModule } from './connected-routing.module';
import { NavbarConnectComponent } from './components/navbar-connect/navbar-connect.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { MatChipsModule, MatIconModule, MatSortModule, MatAutocompleteModule, MatMenu, MatMenuModule } from '@angular/material/';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { FormsModule } from '@angular/forms';

import { MatProgressSpinnerModule } from '@angular/material';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { AnimalsComponent } from './pages/animals/animals.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { PhotosComponent } from './pages/photos/photos.component';
// import { UserRolePipe } from './../../shared/pipe/user-role.pipe';


@NgModule({
  declarations: [
    NavbarConnectComponent,
    DashboardComponent,
    NumerosComponent,
    AnimalsComponent,
    ArtistsComponent,
    EventsComponent,
    PhotosComponent
    // UserRolePipe,
  ],


  imports: [
    CommonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSortModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    ConnectedRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    FormsModule
  ],

  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [],
  entryComponents: []
})
export class ConnectedModule {}
