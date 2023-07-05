import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiChuckService {

  constructor(private http: HttpClient) { }

    getRandomJoke() {
      return this.http.get("https://api.chucknorris.io/jokes/random")
    }
}
