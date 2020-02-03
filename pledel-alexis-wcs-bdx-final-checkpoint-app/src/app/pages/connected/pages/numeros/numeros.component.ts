import { UserService } from './../../../../shared/services/user.service';
import { Numero } from './../../../../shared/models/numero';
import { NumeroService } from './../../../../shared/services/numero.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss']
})
export class NumerosComponent implements OnInit {

  constructor(private numerosService: NumeroService,
              private userService: UserService) { }

  @Input() user: User;

  tabAllNumeros: Numero[];

  ngOnInit() {
    this.user = this.userService.user;

    this.numerosService.getAll()
    .subscribe((tabNumeros) => {
      this.tabAllNumeros = tabNumeros;
    });
    console.log(this.tabAllNumeros);
  }

  deleteNumero(id) {
    console.log(id);
    this.numerosService.delete(id).subscribe(() => console.log('delete ok'));
    // this.snackBarService.openSnackBar(`L'utilisateur ${this.user.firstName}  a été supprimé.`);
  }

}
