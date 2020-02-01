import { EventsComponent } from './pages/events/events.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { AuthGuard } from './../../cores/auth.guard';
import { UserRole } from './../../shared/models/user';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { AnimalsComponent } from './pages/animals/animals.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const connectedRoutes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { role: [UserRole.ADMIN] }
  },
  {
    path: 'numeros',
    component: NumerosComponent,
    canActivate: [AuthGuard],
    data: { role: [UserRole.ADMIN] }
  },
  {
    path: 'artists',
    component: ArtistsComponent,
    canActivate: [AuthGuard],
    data: { role: [UserRole.ADMIN] }
  },
  {
    path: 'animals',
    component: AnimalsComponent,
    canActivate: [AuthGuard],
    data: { role: [UserRole.ADMIN] }
  },
  {
    path: 'events',
    component: EventsComponent,
    canActivate: [AuthGuard],
    data: { role: [UserRole.ADMIN] }
  },
];

@NgModule({
  imports: [RouterModule.forChild(connectedRoutes)],
  exports: [RouterModule]
})
export class ConnectedRoutingModule { }
