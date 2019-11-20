import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = `https://level-up-api-qllahajrnz.now.sh/`

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  model = `animals`

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<any>(this.getUrl())
      .pipe(map(res => res));
  }

  create(animal) {
    return this.http.post(this.getUrl(), animal);
  }

  update(animal) {
    return this.http.patch(this.getUrlForId(animal.id), animal);
  }

  delete(animalId) {
    return this.http.delete(this.getUrlForId(animalId));
  }
}
