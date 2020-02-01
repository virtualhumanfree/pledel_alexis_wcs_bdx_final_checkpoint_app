import { Event } from './../../../shared/models/event';
import { EventService } from './../../../shared/services/event.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private eventService: EventService) { }

  tabAllEvents: Event[];

  ngOnInit() {
    this.eventService.getAll()
    .subscribe((tabEvents) => {
      console.log(tabEvents);
      this.tabAllEvents = tabEvents;
    });
  }

}
