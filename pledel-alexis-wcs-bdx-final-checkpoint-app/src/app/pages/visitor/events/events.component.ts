import { TicketService } from './../../../shared/services/ticket.service';
import { Ticket } from './../../../shared/models/ticket';
import { Event } from './../../../shared/models/event';
import { EventService } from './../../../shared/services/event.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private eventService: EventService,
              private ticketService: TicketService) { }

  tabAllEvents: Event[];
  tabTicketOfEvent: Ticket;

  popupCode = false;
  popupTicket = false;

  ngOnInit() {
    this.eventService.getAll()
    .subscribe((tabEvents) => {
      console.log(tabEvents);
      this.tabAllEvents = tabEvents;
    });
  }

  openPopupTicket(id) {
    this.popupTicket = !this.popupTicket;
    for (const event of this.tabAllEvents) {
      if (event.id === id) {
        this.tabTicketOfEvent = event.tickets;
      }
    }
  }

  closePopupAndAchat() {
    this.popupTicket = !this.popupTicket;
    this.popupCode = !this.popupCode;
  }

  closePopupAchat() {
    this.popupCode = !this.popupCode;
  }

}
