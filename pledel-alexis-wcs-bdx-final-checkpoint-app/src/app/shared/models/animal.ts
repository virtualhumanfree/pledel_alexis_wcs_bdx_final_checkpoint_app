import { Artist } from './artist';
import { Photo } from './photo';

export class Animal {
  public id: number;
  public name: string;
  public race: string;
  public description: string;
  public photos: Photo;
  public artists: Artist;

  constructor(input?: Animal) {
    Object.assign(this, input);
  }
}
