import { Event } from './event';

export class Ticket {
  public id: number;
  public role: string;
  public prix: number;
  public event: Event;

  constructor(input?: Ticket) {
    Object.assign(this, input);
  }
}
