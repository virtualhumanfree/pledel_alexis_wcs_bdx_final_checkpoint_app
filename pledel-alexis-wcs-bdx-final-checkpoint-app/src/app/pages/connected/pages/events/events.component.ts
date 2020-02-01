import { UserService } from './../../../../shared/services/user.service';
import { EventService } from './../../../../shared/services/event.service';
import { Event } from './../../../../shared/models/event';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private eventService: EventService,
              private userService: UserService) { }

  @Input() user: User;

  tabAllEvents: Event[];

  ngOnInit() {
    this.user = this.userService.user;

    this.eventService.getAll()
      .subscribe((tabEvents) => {
        console.log(tabEvents);
        this.tabAllEvents = tabEvents;
      });
  }

}
