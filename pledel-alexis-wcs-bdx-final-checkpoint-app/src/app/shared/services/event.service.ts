import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  static URL = environment.urlServer + 'events';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Event[]> {
    return this.http.get(EventService.URL).pipe(map(this.convertDataFromServerToSites));
  }

  private convertDataFromServerToSites(events: any[]): Event[] {
    return events.map((event) => {
      return new Event(event);
    });
  }

  public getById(id: number): Observable<Event> {
    return this.http.get(EventService.URL + '/' + id).pipe(map((event: Event) => new Event(event)));
  }

  public create(event: Event): Observable<any> {
    return this.http.post(EventService.URL, event);
  }

  public update(event: Event): Observable<any> {
    return this.http.put(EventService.URL + '/' + event.id, event);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(EventService.URL + '/' + id);
  }
}
