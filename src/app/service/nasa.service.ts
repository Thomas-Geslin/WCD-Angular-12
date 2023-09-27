import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(public http: HttpClient) { }

  getImageOfTheDay(): Observable<string> {
    return this.http.get<string>("https://api.nasa.gov/planetary/apod?api_key=SNChe49VDVbVvbcn5tDCh3JvGvvM6TpJz9MEZUCu");
  }

}
