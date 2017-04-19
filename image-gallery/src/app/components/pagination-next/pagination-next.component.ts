import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-next',
  templateUrl: './pagination-next.component.html',
  styleUrls: ['./pagination-next.component.css']
})
export class PaginationNextComponent implements OnInit, OnChanges {
  @Input() limit;
  @Input() actualCount;
  isDisabled = true;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges (changes) {
    const count = changes['actualCount'].currentValue;
    console.log(count)
    this.isDisabled = this.checkCount(count);
  }

  checkCount (count) {
    return count < this.limit ? true : false;
  }

}
