import { NumeroService } from './../../../../shared/services/numero.service';
import { Event } from './../../../../shared/models/event';
import { ArtistService } from './../../../../shared/services/artist.service';
import { EventService } from './../../../../shared/services/event.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { UserService } from './../../../../shared/services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { Photo } from 'src/app/shared/models/photo';
import { ErrorStateMatcher } from '@angular/material';
import { Artist } from 'src/app/shared/models/artist';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


    constructor(private userService: UserService,
                private photoService: PhotoService,
                private numeroService: NumeroService,
                private formBuilder: FormBuilder,
                private eventService: EventService,
                private artistService: ArtistService,
                private router: Router
    ) {
        this.formCreateNumero = this.formBuilder.group({
            title: [''],
            description: [''],
            duration: [''],
            photos: [],
            event: [],
            artists: [],
            date: [new Date()],
            subscribe: [true],
            memory: [32],
            distance: [50],
            region: ['south-america']
        });
    }

    @Input() user: User;

    activePopupNumero = false;
    tabPhotoNotAssign: Photo[];
    tabArtistNotAssign: Artist[];
    tabAllEvents: Event[];
    formCreateNumero: FormGroup;
    submitted = false;

    ngOnInit() {
        this.user = this.userService.user;

        this.photoService.getPhotoNotAssign()
        .subscribe((tabPhotos) => {
            this.tabPhotoNotAssign = tabPhotos;
        });

        this.eventService.getAll()
        .subscribe((tabEvents) => {
            this.tabAllEvents = tabEvents;
        });

        this.artistService.getArtistNotAssign()
        .subscribe((tabArtists) => {
            this.tabArtistNotAssign = tabArtists;
        });
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.formCreateNumero.controls;
      }

    submitNumero() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.formCreateNumero.invalid) {
          return;
        } else {
            this.numeroService.create(this.formCreateNumero.value)
            .subscribe(() => {
                console.log('valid');
            });
            console.log(this.formCreateNumero.value);
        }
    }


    toglePopupNumero() {
        this.activePopupNumero = !this.activePopupNumero;
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
