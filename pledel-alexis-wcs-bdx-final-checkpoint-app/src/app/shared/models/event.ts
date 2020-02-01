import { Lieu } from './lieu';
import { Numero } from './numero';
import { Artist } from './artist';
import { Ticket } from './ticket';

export class Event {
  public id: number;
    public title: string;
    public photobandeau: string;
    public numeros: Numero;
    public artists: Artist;
    public lieu: Lieu;
    public tickets: Ticket;

    constructor(input?: Event) {
      Object.assign(this, input);
    }
}
