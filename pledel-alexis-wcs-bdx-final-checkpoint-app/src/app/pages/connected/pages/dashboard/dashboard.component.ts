import { UserService } from './../../../../shared/services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    @Input() user: User;

    constructor(private userService: UserService,
                private router: Router
    ) { }

    activePopupNumero = false;

    ngOnInit() {
        this.user = this.userService.user;
    }


    toglePopupNumero() {
        this.activePopupNumero = !this.activePopupNumero;
    }

}
