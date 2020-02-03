import { TicketRole } from './../enum/ticket-role.enum';
import { Event } from './event';


export class Ticket {
  public id: number;
  public role: TicketRole;
  public prix: number;
  public event: Event;

  constructor(input?: Ticket) {
    Object.assign(this, input);
  }
}
