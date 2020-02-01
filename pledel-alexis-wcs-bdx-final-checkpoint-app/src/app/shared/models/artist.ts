import { Photo } from './photo';
import { Event } from './event';
import { Numero } from './numero';
import { Animal } from './animal';

export class Artist {
  public id: number;
  public name_artist: string;
  public firstname: string;
  public lastname: string;
  public description: string;
  public photos: Photo;
  public numero: Numero;
  public event: Event;
  public animal: Animal;

  constructor(input?: Artist) {
    Object.assign(this, input);
  }
}
