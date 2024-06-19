import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/models/item.model';
import { RepeatService } from 'src/app/services/repeat.service';

@Component({
  selector: 'repeat-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  item: Item;

  constructor(private service: RepeatService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem() {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        let id = params.get('id');
        this.service.getItemById(id).subscribe(item => {
          this.item = item;
        });
      }
    });
  }

  openSellDialog() {

  }

  sellItem() {
    if(this.item.sold === false && this.item.donated === false) {
      this.item.sold = true;
      this.item.active = false;
      this.service.editItem(this.item).subscribe();
    }
  }
  donateItem() {
    if(this.item.donated === false && this.item.sold === false) {
      this.item.donated = true;
      this.item.active = false;
      this.service.editItem(this.item).subscribe();
    }
  }

  routeBack() {
    this.router.navigateByUrl('/warehouse');
  }

}
