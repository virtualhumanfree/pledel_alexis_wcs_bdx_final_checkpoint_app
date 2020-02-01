import { Numero } from './../../../shared/models/numero';
import { NumeroService } from './../../../shared/services/numero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss']
})
export class NumerosComponent implements OnInit {

  constructor(private numerosService: NumeroService) { }

  tabAllNumeros: Numero[];

  ngOnInit() {
    this.numerosService.getAll()
    .subscribe((tabNumeros) => {
      this.tabAllNumeros = tabNumeros;
    });
    console.log(this.tabAllNumeros);
  }

}
