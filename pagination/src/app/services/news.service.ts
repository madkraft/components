import { Injectable } from '@angular/core';
import { Http, Headers, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

const LamernewsAPI = require('lamernews-api');

@Injectable()
export class NewsService {
  url: string;
  api;

  constructor(private jsonp: Jsonp) {
    this.url = 'http://echojs.com/api/';
    this.api = new LamernewsAPI(this.url);
  }

  getSportsNews () {
    const options = {
      count: 5,
      type: 'top'
    };
    this.api.getNews(options, (err, res) => console.log(res))
  }
}
