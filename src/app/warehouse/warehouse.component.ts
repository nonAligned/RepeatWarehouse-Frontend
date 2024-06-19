import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/item.model';
import { RepeatService } from '../services/repeat.service';

@Component({
  selector: 'repeat-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  items: Item[];
  itemCount: number;
  parameters = {
    page: 1,
    pageSize: 10,
    sort: "",
    sortDirection: "desc",
    filter: {
      stored: true,
      sold: false,
      donated: false,
      active: false
    }
  }

  constructor(private service: RepeatService, private router: Router) { }

  ngOnInit(): void {
    if (this.router.navigated) {
      if(localStorage.getItem('page')){
        this.parameters.page = Number(localStorage.getItem('page'));
      }
      if(localStorage.getItem('stored')) {
        if (localStorage.getItem('stored') === 'true') {
          this.parameters.filter.stored = true;
        } else {
          this.parameters.filter.stored = false;
        }
      }
      if(localStorage.getItem('donated')) {
        if (localStorage.getItem('donated') === 'true') {
          this.parameters.filter.donated = true;
        } else {
          this.parameters.filter.donated = false;
        }
      }
      if(localStorage.getItem('active')) {
        if (localStorage.getItem('active') === 'true') {
          this.parameters.filter.active = true;
        } else {
          this.parameters.filter.active = false;
        }
      }
      if(localStorage.getItem('sold')) {
        if (localStorage.getItem('sold') === 'true') {
          this.parameters.filter.sold = true;
        } else {
          this.parameters.filter.sold = false;
        }
      }

      
      localStorage.clear();
    }
    this.getItems();
  }

  getItems() {
    this.service.getItems(this.parameters).subscribe(data => {
      this.items = data.results;
      this.itemCount = data.count;
    });
  }

  updatePage(newPage) {
    this.parameters.page = newPage;
    this.getItems();
  }

  updateFilter(newFilter: any) {
    this.parameters.filter.sold = newFilter.sold;
    this.parameters.filter.donated = newFilter.donated;
    this.parameters.filter.active = newFilter.active;
    this.parameters.filter.stored = newFilter.stored;
    this.parameters.page = 1;
    this.getItems();
  }

}
