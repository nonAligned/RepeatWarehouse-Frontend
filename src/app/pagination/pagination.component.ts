import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'repeat-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalItems: number;
  @Input() pageSize: number;
  totalPages: number = 1;
  @Input() selectedPage: number = 1;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.calculatePages();
  }

  ngOnChanges(): void {
    this.calculatePages();
  }

  calculatePages() {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
  }

  changePage(value) {
    if (value === "next") {
      this.selectedPage++;
    } else if (value === "previous") {
      this.selectedPage--;
    } else {
      this.selectedPage = value;
    }
    this.pageChanged.emit(this.selectedPage);
  }


}
