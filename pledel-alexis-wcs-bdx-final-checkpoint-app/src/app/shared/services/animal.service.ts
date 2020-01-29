import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  static URL = environment.urlServer + 'animals';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Animal[]> {
    return this.http.get(AnimalService.URL).pipe(map(this.convertDataFromServerToSites));
  }

  private convertDataFromServerToSites(animals: any[]): Animal[] {
    return animals.map((animal) => {
      return new Animal(animal);
    });
  }

  public getById(id: number): Observable<Animal> {
    return this.http.get(AnimalService.URL + '/' + id).pipe(map((animal: Animal) => new Animal(animal)));
  }

  public create(animal: Animal): Observable<any> {
    return this.http.post(AnimalService.URL, animal);
  }

  public update(animal: Animal): Observable<any> {
    return this.http.put(AnimalService.URL + '/' + animal.id, animal);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(AnimalService.URL + '/' + id);
  }
}
