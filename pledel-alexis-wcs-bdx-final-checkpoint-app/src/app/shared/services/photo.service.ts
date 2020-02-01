import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  static URL = environment.urlServer + 'photos';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Photo[]> {
    return this.http.get(PhotoService.URL).pipe(map(this.convertDataFromServerToSites));
  }

  public getPhotoNotAssign(): Observable<Photo[]> {
    return this.http.get(PhotoService.URL + '/photoNotAssign').pipe(map(this.convertDataFromServerToSites));
  }

  private convertDataFromServerToSites(photos: any[]): Photo[] {
    return photos.map((photo) => {
      return new Photo(photo);
    });
  }

  public getById(id: number): Observable<Photo> {
    return this.http.get(PhotoService.URL + '/' + id).pipe(map((photo: Photo) => new Photo(photo)));
  }

  public create(photo: Photo): Observable<any> {
    return this.http.post(PhotoService.URL, photo);
  }

  public update(photo: Photo): Observable<any> {
    return this.http.put(PhotoService.URL + '/' + photo.id, photo);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(PhotoService.URL + '/' + id);
  }
}
