import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() itemsTotal: number;
  @Input() itemsOnPage: number;
  @Input() currentPage = 1;
  @Input() hideOnSinglePage = true;
  @Output() onChange = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  numberOfPages () {
    return Math.ceil(this.itemsTotal / this.itemsOnPage);
  }

  generatePages () {
    const pageList = [];
    for (let index = 1; index <= this.numberOfPages(); index++) {
      pageList.push(index);
    }
    return pageList;
  }

  changePage (page) {
    if (page < 1 || page > this.numberOfPages()) {
      return;
    } else {
      this.currentPage = page;
      this.onChange.emit(page);
    }
  }
}



// displayedPages
  // Default: 5	How many page numbers should be visible while navigating.
  // Minimum allowed: 3 (previous, current & next)


// text to be displayed on btns
// nextText
// prevText

// <paginator *[total]="50"
//            *[onPage]="5"
//            *[currentPage]="1"
//            [maxVisible]="5"
//            *(onChange)="someActionOnPageChange()"
//            ?[directionLinks]="true"
//            ?directionNextLabel="Next"
//            ?directionPreviousLabel="Prev"
//            ?[boundaryLinks]="true"
//            ?boundaryFirstLabel="First"
//            ?boundaryLastLabel="Last"
//            *[hideOnSinglePage]="true">
// </paginator>