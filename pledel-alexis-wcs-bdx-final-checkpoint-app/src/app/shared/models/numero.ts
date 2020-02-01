import { Photo } from './photo';
import { Event } from './event';
import { Artist } from './artist';

export class Numero {
  public id: number;
  public title: string;
  public description: string;
  public duration: string;
  public photos: Photo;
  public event: Event;
  public artists: Artist;

  constructor(input?: Numero) {
    Object.assign(this, input);
  }
}
