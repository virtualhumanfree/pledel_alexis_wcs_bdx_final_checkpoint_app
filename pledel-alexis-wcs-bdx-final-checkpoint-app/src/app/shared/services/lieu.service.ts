import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lieu } from '../models/lieu';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LieuService {

  static URL = environment.urlServer + 'lieu';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Lieu[]> {
    return this.http.get(LieuService.URL).pipe(map(this.convertDataFromServerToSites));
  }

  private convertDataFromServerToSites(lieux: any[]): Lieu[] {
    return lieux.map((lieu) => {
      return new Lieu(lieu);
    });
  }

  public getLieuxNotAssign(): Observable<Lieu[]> {
    return this.http.get(LieuService.URL + '/lieuNotAssign').pipe(map(this.convertDataFromServerToSites));
  }

  public getById(id: number): Observable<Lieu> {
    return this.http.get(LieuService.URL + '/' + id).pipe(map((lieu: Lieu) => new Lieu(lieu)));
  }

  public create(lieu: Lieu): Observable<any> {
    return this.http.post(LieuService.URL, lieu);
  }

  public update(lieu: Lieu): Observable<any> {
    return this.http.put(LieuService.URL + '/' + lieu.id, lieu);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(LieuService.URL + '/' + id);
  }
}
