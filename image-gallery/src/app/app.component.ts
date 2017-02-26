import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentImage;
  interval;
  images = [
    {
      thumb: 'http://placehold.it/56x56/b000b5/ffffff',
      full: 'http://placehold.it/735x347/b000b5/ffffff'
    },
    {
      thumb: 'http://placehold.it/56x56/bada55/ffffff',
      full: 'http://placehold.it/735x347/bada55/ffffff'
    },
    {
      thumb: 'http://placehold.it/56x56/c0ffee/ffffff',
      full: 'http://placehold.it/735x347/c0ffee/ffffff'
    },
    {
      thumb: 'http://placehold.it/56x56/101/fff',
      full: 'http://placehold.it/735x347/101/fff'
    },
    {
      thumb: 'http://placehold.it/56x56/c55/fff',
      full: 'http://placehold.it/735x347/c55/fff'
    },
    {
      thumb: 'http://placehold.it/56x56/d11d05/fff',
      full: 'http://placehold.it/735x347/d11d05/fff'
    }
  ];

  ngOnInit () {
    this.currentImage = this.images[0];
  }

  onImgClick (image) {
    this.currentImage = image;
  }

  next () {
    const position = this.getPosition();
    this.currentImage = this.images[position + 1] ||this.images[0];
  }

  prev () {
    const position = this.getPosition();
    this.currentImage = this.images[position - 1] || this.images[this.images.length-1];
  }

  getPosition () {
    return this.images.map(image => image.thumb).indexOf(this.currentImage.thumb);
  }
}
