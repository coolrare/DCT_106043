import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  articles = [];

  constructor(http: HttpClient) {
    http.get<any[]>('/api/articles.json')
      .subscribe(data => {
        this.articles = data;
      });
  }

}
