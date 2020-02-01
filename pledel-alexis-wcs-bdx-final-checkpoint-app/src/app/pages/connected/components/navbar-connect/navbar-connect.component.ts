import { User } from '../../../../shared/models/user';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../../../shared/services/authentification.service';

@Component({
  selector: 'app-navbar-connect',
  templateUrl: './navbar-connect.component.html',
  styleUrls: ['./navbar-connect.component.scss']
})
export class NavbarConnectComponent implements OnInit {
  @Input() user: User;

  private userList = [
    ['/log/numeros', 'Nos Numéros'],
    ['/log/artists', 'Nos Artistes'],
    ['/log/animals', 'Nos Animaux'],
    ['/log/events', 'Nos Evènement']
  ];

  private adminList = [
    ['/log/dashboard', 'Mon Tableau de bord'],
    ['/log/numeros', 'Nos Numéros'],
    ['/log/artists', 'Nos Artistes'],
    ['/log/animals', 'Nos Animaux'],
    ['/log/events', 'Nos Evènement']
  ];

  selectedList: string[][];
  menuBurger: boolean;

  constructor(private authentificationService: AuthentificationService, private router: Router) { }

  ngOnInit() {
    if (this.user.role === 'user') {
      this.selectedList = this.userList;
    } else if (this.user.role === 'admin') {
      this.selectedList = this.adminList;
    }

    if ( window.screen.width < 769 ) {
      this.menuBurger = true;
    } else {
      this.menuBurger = false;
    }
  }

  logout() {
    this.authentificationService.logout();
    this.router.navigate(['/login']);
  }
}