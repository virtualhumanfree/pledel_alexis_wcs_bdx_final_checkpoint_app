import { Lieu } from './lieu';
import { Artist } from './artist';
import { Numero } from './numero';
import { Animal } from './animal';

export class Photo {
    public id: number;
    public title: string;
    public description: string;
    public lieu: Lieu;
    public artist: Artist;
    public numero: Numero;
    public animal: Animal;

    constructor(input?: Photo) {
      Object.assign(this, input);
    }
}
