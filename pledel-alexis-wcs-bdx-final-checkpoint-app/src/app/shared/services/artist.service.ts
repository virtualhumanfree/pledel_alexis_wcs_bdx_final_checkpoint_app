import { Artist } from './../models/artist';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  static URL = environment.urlServer + 'artists';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Artist[]> {
    return this.http.get(ArtistService.URL).pipe(map(this.convertDataFromServerToSites));
  }

  private convertDataFromServerToSites(artists: any[]): Artist[] {
    return artists.map((artist) => {
      return new Artist(artist);
    });
  }

  public getArtistNotAssign(): Observable<Artist[]> {
    return this.http.get(ArtistService.URL + '/artistNotAssign').pipe(map(this.convertDataFromServerToSites));
  }

  public getById(id: number): Observable<Artist> {
    return this.http.get(ArtistService.URL + '/' + id).pipe(map((artist: Artist) => new Artist(artist)));
  }

  public create(artist: Artist): Observable<any> {
    return this.http.post(ArtistService.URL, artist);
  }

  public update(artist: Artist): Observable<any> {
    return this.http.put(ArtistService.URL + '/' + artist.id, artist);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(ArtistService.URL + '/' + id);
  }
}
