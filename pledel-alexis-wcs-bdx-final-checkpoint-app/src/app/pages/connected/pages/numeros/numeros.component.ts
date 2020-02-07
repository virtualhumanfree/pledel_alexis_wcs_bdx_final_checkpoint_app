import { ArtistService } from './../../../../shared/services/artist.service';
import { Artist } from './../../../../shared/models/artist';
import { Event } from './../../../../shared/models/event';
import { EventService } from './../../../../shared/services/event.service';
import { PhotoService } from './../../../../shared/services/photo.service';
import { Photo } from './../../../../shared/models/photo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
              private userService: UserService,
              private formBuilderNumero: FormBuilder,
              private photoService: PhotoService,
              private eventService: EventService,
              private artistService: ArtistService) {
    this.formCreateNumero = this.formBuilderNumero.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', Validators.required],
      photos: [[], Validators.required],
      event: [{}, Validators.required],
      artists: [[], Validators.required]
    });
  }

  @Input() user: User;

  tabAllNumeros: Numero[];
  tabPhotoNotAssign: Photo[];
  tabAllEvents: Event[];
  tabAllArtist: Artist[];

  activePopupNumero = false;
  submittedNumero = false;

  formCreateNumero: FormGroup;

  numeroSelected: Numero;

  ngOnInit() {
    this.user = this.userService.user;

    this.numerosService.getAll()
      .subscribe((tabNumeros) => {
        console.log(tabNumeros);
        this.tabAllNumeros = tabNumeros;
      });
    console.log(this.tabAllNumeros);

    this.photoService.getPhotoNotAssign()
      .subscribe((tabPhotos: Photo[]) => {
        this.tabPhotoNotAssign = tabPhotos;
      });

    this.eventService.getAll()
      .subscribe((tabEvents: Event[]) => {
        this.tabAllEvents = tabEvents;
      });

    this.artistService.getAll()
      .subscribe((tabArtists: Artist[]) => {
        this.tabAllArtist = tabArtists;
      });
  }

  toglePopupNumero(numero) {
    this.activePopupNumero = !this.activePopupNumero;
    this.numeroSelected = numero;
  }

  // convenience getter for easy access to form fields
  get numero() {
    return this.formCreateNumero.controls;
  }

  submitNumero() {
    this.submittedNumero = true;

    // stop here if form is invalid
    if (this.formCreateNumero.invalid) {
      return;
    } else {
      const numeroModify = this.formCreateNumero.value;
      numeroModify.id = this.numeroSelected.id;
      this.numerosService.update(numeroModify)
        .subscribe(() => {
          console.log('valid');
        });
      console.log(this.numeroSelected);
    }
  }

  onReset() {
    this.submittedNumero = false;

    this.formCreateNumero.reset();
  }

  deleteNumero(id) {
    console.log(id);
    this.numerosService.delete(id).subscribe(() => console.log('delete ok'));
    // this.snackBarService.openSnackBar(`L'utilisateur ${this.user.firstName}  a été supprimé.`);
  }

}
