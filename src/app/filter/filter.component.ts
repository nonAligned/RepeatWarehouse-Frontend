import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'repeat-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filter = {
    active: false,
    sold: false,
    donated: false,
    stored: true
  }
  @Output() filterChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateFilter() {
    this.filterChanged.emit(this.filter);
  }

}
