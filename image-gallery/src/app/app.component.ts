import { Component } from '@angular/core';
import { ReqresService } from './reqres.service';

export interface Image {
  title: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [];

  constructor(private reqres: ReqresService) { }

  ngOnInit() {
    this.reqres.post().subscribe(res => {
      this.posts = res.json();
    });
  }
}
