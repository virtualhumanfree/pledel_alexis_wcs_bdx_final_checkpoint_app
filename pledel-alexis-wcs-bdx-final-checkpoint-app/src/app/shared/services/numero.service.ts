import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Numero } from '../models/numero';

@Injectable({
  providedIn: 'root'
})
export class NumeroService {

  static URL = environment.urlServer + 'numeros';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Numero[]> {
    return this.http.get(NumeroService.URL).pipe(map(this.convertDataFromServerToSites));
  }

  private convertDataFromServerToSites(numeros: any[]): Numero[] {
    return numeros.map((numero) => {
      return new Numero(numero);
    });
  }

  public getById(id: number): Observable<Numero> {
    return this.http.get(NumeroService.URL + '/' + id).pipe(map((numeros: Numero) => new Numero(numeros)));
  }

  public create(numeros: Numero): Observable<any> {
    return this.http.post(NumeroService.URL, numeros);
  }

  public update(numeros: Numero): Observable<any> {
    return this.http.put(NumeroService.URL + '/' + numeros.id, numeros);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(NumeroService.URL + '/' + id);
  }
}
