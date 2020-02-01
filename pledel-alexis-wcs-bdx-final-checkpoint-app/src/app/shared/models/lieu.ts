import { Event } from './event';
import { Photo } from './photo';

export class Lieu {
    public id: number;
    public name: string;
    public city: string;
    public address: string;
    public postcode: string;
    public photo: Photo;
    public event: Event;

    constructor(input?: Lieu) {
      Object.assign(this, input);
    }
}
