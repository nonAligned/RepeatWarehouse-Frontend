import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'repeat-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() page: number;
  @Input() filter: {
    stored: boolean,
    sold: boolean,
    active: boolean,
    donated: boolean
  }
  dialogVisible: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDetails() {
    localStorage.setItem('page', String(this.page));
    localStorage.setItem('stored', String(this.filter.stored));
    localStorage.setItem('sold', String(this.filter.sold));
    localStorage.setItem('active', String(this.filter.active));
    localStorage.setItem('donated', String(this.filter.donated));
    this.router.navigate(['/warehouse/item/', this.item._id]);
  }

  openDialog() {
    this.dialogVisible = true;
  }

}
