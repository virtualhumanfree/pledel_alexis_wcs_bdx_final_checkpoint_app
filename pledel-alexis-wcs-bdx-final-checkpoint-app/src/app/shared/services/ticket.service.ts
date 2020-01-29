import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  static URL = environment.urlServer + 'tickets';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Ticket[]> {
    return this.http.get(TicketService.URL).pipe(map(this.convertDataFromServerToSites));
  }

  private convertDataFromServerToSites(tickets: any[]): Ticket[] {
    return tickets.map((ticket) => {
      return new Ticket(ticket);
    });
  }

  public getById(id: number): Observable<Ticket> {
    return this.http.get(TicketService.URL + '/' + id).pipe(map((ticket: Ticket) => new Ticket(ticket)));
  }

  public create(ticket: Ticket): Observable<any> {
    return this.http.post(TicketService.URL, ticket);
  }

  public update(ticket: Ticket): Observable<any> {
    return this.http.put(TicketService.URL + '/' + ticket.id, ticket);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(TicketService.URL + '/' + id);
  }
}
