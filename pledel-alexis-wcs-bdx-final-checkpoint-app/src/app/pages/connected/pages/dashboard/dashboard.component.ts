import { Artist } from './../../../../shared/models/artist';
import { TicketRole } from './../../../../shared/enum/ticket-role.enum';
import { TicketService } from './../../../../shared/services/ticket.service';
import { Ticket } from './../../../../shared/models/ticket';
import { Lieu } from './../../../../shared/models/lieu';
import { LieuService } from './../../../../shared/services/lieu.service';
import { AnimalService } from './../../../../shared/services/animal.service';
import { Numero } from './../../../../shared/models/numero';
import { Animal } from './../../../../shared/models/animal';
import { NumeroService } from './../../../../shared/services/numero.service';
import { Event } from './../../../../shared/models/event';
import { ArtistService } from './../../../../shared/services/artist.service';
import { EventService } from './../../../../shared/services/event.service';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { UserService } from './../../../../shared/services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { Photo } from 'src/app/shared/models/photo';
import { ErrorStateMatcher } from '@angular/material';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


    constructor(private userService: UserService,
                private photoService: PhotoService,
                private numeroService: NumeroService,
                private formBuilderNumero: FormBuilder,
                private formBuilderArtist: FormBuilder,
                private formBuilderAnimal: FormBuilder,
                private formBuilderEvent: FormBuilder,
                private formBuilderPhoto: FormBuilder,
                private formBuilderTicket: FormBuilder,
                private eventService: EventService,
                private artistService: ArtistService,
                private animalService: AnimalService,
                private lieuService: LieuService,
                private ticketService: TicketService,
                private router: Router
    ) {
        this.formCreateNumero = this.formBuilderNumero.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            duration: ['', Validators.required],
            photos: [[], Validators.required],
            event: [{}, Validators.required],
            artists: [[], Validators.required]
        });
        this.formCreateArtist = this.formBuilderArtist.group({
            name_artist: ['', Validators.required],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            description: ['', Validators.required],
            photos: [[], Validators.required],
            numero: [{}, Validators.required],
            event: [{}, Validators.required],
            animal: [{}, Validators.required]
        });
        this.formCreateAnimal = this.formBuilderAnimal.group({
            name: ['', Validators.required],
            race: ['', Validators.required],
            description: ['', Validators.required],
            photos: [[], Validators.required],
            artists: [[], Validators.required]
        });
        this.formCreateEvent = this.formBuilderEvent.group({
            title: ['', Validators.required],
            photobandeau: ['', Validators.required],
            numeros: [[], Validators.required],
            artists: [[], Validators.required],
            lieu: [{}, Validators.required],
            tickets: [[], Validators.required],
        });
        this.formCreateTicket = this.formBuilderTicket.group({
            role: ['', Validators.required],
            prix: ['', Validators.required],
            event: [{}, Validators.required]
        });
        this.formCreatePhoto = this.formBuilderPhoto.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            numero: [{}],
            artist: [{}],
            lieu: [{}, Validators.required],
            animal: [{}],
        });
    }

    @Input() user: User;

    activePopupNumero = false;
    activePopupArtist = false;
    activePopupAnimal = false;
    activePopupEvent = false;
    activePopupTicket = false;
    activePopupPhoto = false;

    tabPhotoNotAssign: Photo[];
    tabArtistNotAssign: Artist[];
    tabAnimalNotAssign: Animal[];
    tabLieuxNotAssign: any = [];

    tabAllNumero: Numero[];
    tabAllEvents: Event[];
    tabAllLieux: Lieu[];
    tabAllTickets: Ticket[];
    tabRoleTickets = [{ name: 'Adulte', role: 'adult' },
    { name: 'Enfant', role: 'child' },
    { name: 'Bébé', role: 'baby' }];

    formCreateNumero: FormGroup;
    formCreateArtist: FormGroup;
    formCreateAnimal: FormGroup;
    formCreateEvent: FormGroup;
    formCreateTicket: FormGroup;
    formCreatePhoto: FormGroup;

    submittedNumero = false;
    submittedArtist = false;
    submittedAnimal = false;
    submittedEvent = false;
    submittedTicket = false;
    submittedPhoto = false;

    eventOfTicket: Event;
    ticket: Ticket;

    ngOnInit() {
        this.user = this.userService.user;

        this.photoService.getPhotoNotAssign()
            .subscribe((tabPhotos: Photo[]) => {
                this.tabPhotoNotAssign = tabPhotos;
            });

        this.eventService.getAll()
            .subscribe((tabEvents: Event[]) => {
                this.tabAllEvents = tabEvents;
                this.lieuService.getAll()
            .subscribe((tabLieux: Lieu[]) => {
                let tabLieuModify;
                this.tabAllLieux = tabLieux;
                for (const lieu of this.tabAllLieux) {
                    for (const event of this.tabAllEvents) {
                        if (lieu.id !== event.lieu.id) {
                            tabLieuModify = lieu;
                            console.log(lieu);
                        }
                        console.log(tabLieuModify);
                        if (tabLieuModify !== undefined) {
                            console.log(tabLieuModify);
                            this.tabLieuxNotAssign.push(tabLieuModify);
                            console.log(this.tabLieuxNotAssign);
                        }
                    }
                }
            });
            });

        this.artistService.getArtistNotAssign()
            .subscribe((tabArtists: Artist[]) => {
                this.tabArtistNotAssign = tabArtists;
            });

        this.animalService.getAnimalNotAssign()
            .subscribe((tabAnimals: Animal[]) => {
                this.tabAnimalNotAssign = tabAnimals;
            });

        this.numeroService.getAll()
            .subscribe((tabNumeros: Numero[]) => {
                this.tabAllNumero = tabNumeros;
            });

        this.ticketService.getAll()
            .subscribe((tabTickets) => {
                this.tabAllTickets = tabTickets;
            });
    }

    // convenience getter for easy access to form fields
    get numero() {
        return this.formCreateNumero.controls;
    }

    get artist() {
        return this.formCreateArtist.controls;
    }

    get animal() {
        return this.formCreateAnimal.controls;
    }

    get event() {
        return this.formCreateEvent.controls;
    }

    get tickets() {
        return this.formCreateTicket.controls;
    }

    get photo() {
        return this.formCreatePhoto.controls;
    }

    submitNumero() {
        this.submittedNumero = true;

        // stop here if form is invalid
        if (this.formCreateNumero.invalid) {
            return;
        } else {
            const numero = this.formCreateNumero.value;
            numero.photos = [new Photo(numero.photos)];
            numero.event = new Event(numero.event);
            numero.artists = [new Artist(numero.artists)];
            this.numeroService.create(numero)
                .subscribe(() => {
                    console.log('valid');
                });
            console.log(this.formCreateNumero.value);
        }
    }

    submitArtist() {
        this.submittedArtist = true;

        // stop here if form is invalid
        if (this.formCreateArtist.invalid) {
            return;
        } else {
            this.artistService.create(this.formCreateArtist.value)
                .subscribe(() => {
                    console.log('valid');
                });
            console.log(this.formCreateArtist.value);
        }

        console.log(this.formCreateArtist.value);
    }

    submitAnimal() {
        this.submittedAnimal = true;

        // stop here if form is invalid
        if (this.formCreateAnimal.invalid) {
            return;
        } else {
            this.animalService.create(this.formCreateAnimal.value)
                .subscribe(() => {
                    console.log('valid');
                });
            console.log(this.formCreateAnimal.value);
        }

        console.log(this.formCreateAnimal.value);
    }

    submitEvent() {
        this.submittedEvent = true;

        // stop here if form is invalid
        if (this.formCreateEvent.invalid) {
            return;
        } else {
            const event = new Event(this.formCreateEvent.value);
            this.eventService.create(event)
                .subscribe((data) => {
                    console.log(data);
                });
            console.log(this.formCreateEvent.value);
        }

        console.log(this.formCreateEvent.value);
    }

    submitTicket() {
        this.submittedTicket = true;

        // stop here if form is invalid
        if (this.formCreateTicket.invalid) {
            return;
        } else {
            this.ticketService.create(this.formCreateTicket.value)
                .subscribe(() => {
                    console.log('valid');
                });
            console.log(this.formCreateTicket.value);
        }

        console.log(this.formCreateTicket.value);
    }

    submitPhoto() {
        this.submittedPhoto = true;

        // stop here if form is invalid
        if (this.formCreatePhoto.invalid) {
            return;
        } else {
            const photo = this.formCreatePhoto.value;
            photo.lieu = {
                name: photo.lieu.name,
                city: photo.lieu.city,
                address: photo.lieu.address,
                postcode: photo.lieu.postcode,
                photo: photo.lieu.photo,
                event: photo.lieu.event
            };
            photo.numero = new Numero(photo.numero);
            photo.animal = new Animal(photo.animal);
            photo.artist = new Artist(photo.artist);
            this.photoService.create(photo)
                .subscribe(() => {
                    console.log('valid');
                });
            console.log(photo);
        }

        console.log(this.formCreatePhoto.value);
    }



    toglePopupNumero() {
        this.activePopupNumero = !this.activePopupNumero;
    }

    toglePopupArtist() {
        this.activePopupArtist = !this.activePopupArtist;
    }

    toglePopupAnimal() {
        this.activePopupAnimal = !this.activePopupAnimal;
    }

    toglePopupEvent() {
        this.activePopupEvent = !this.activePopupEvent;
    }

    toglePopupTicket() {
        this.activePopupTicket = !this.activePopupTicket;
    }

    toglePopupPhoto() {
        this.activePopupPhoto = !this.activePopupPhoto;
    }

    onReset() {
        this.submittedNumero = false;
        this.submittedArtist = false;
        this.submittedAnimal = false;
        this.submittedEvent = false;
        this.submittedTicket = false;
        this.submittedPhoto = false;

        this.formCreateNumero.reset();
        this.formCreateArtist.reset();
        this.formCreateAnimal.reset();
        this.formCreateEvent.reset();
        this.formCreateTicket.reset();
        this.formCreatePhoto.reset();
    }

}

// export class ParentErrorStateMatcher implements ErrorStateMatcher {
//     isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//         const isSubmitted = !!(form && form.submitted);
//         const controlTouched = !!(control && (control.dirty || control.touched));
//         const controlInvalid = !!(control && control.invalid);
//         const parentInvalid = !!(control && control.parent && control.parent.invalid && (control.parent.dirty || control.parent.touched));

//         return isSubmitted || (controlTouched && (controlInvalid || parentInvalid));
//     }
//   }
