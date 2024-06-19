import { Component, OnInit } from '@angular/core';
import { Consumable } from '../models/consumable.model';
import { Item } from '../models/item.model';
import { Marketing } from '../models/marketing.model';
import { OtherExpense } from '../models/otherExpense.model';
import { RepeatService } from '../services/repeat.service';

@Component({
  selector: 'repeat-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  activeItems: Item[] = [];
  soldItems: Item[] = [];
  donatedItems: Item[] = [];
  storedItems: Item[] = [];
  itemCount: number;
  consumables: Consumable[];
  marketingCampaigns: Marketing[];
  otherExpenses: OtherExpense[];
  expense: number;
  expenseItems: number;
  income: number;
  equity: number;

  constructor(private service: RepeatService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.initiliaze();
    this.service.getItems().subscribe(itemList => {
      this.itemCount = itemList.count;
      for (let i=0; i<itemList.count; i++) {
        let item: Item = itemList.results[i];
        this.expense += item.purchase_price;
        this.equity += item.retail_price;
        this.expenseItems += item.purchase_price;
        if(item.active) {
          this.activeItems.push(item);
        } else if(item.sold) {
          this.soldItems.push(item);
          this.income += item.retail_price;
        } else if(item.donated) {
          this.donatedItems.push(item);
        } else {
          this.storedItems.push(item);
        }
      }
    });
    this.service.getConsumables().subscribe(consumableList => {
      for (let i=0; i<consumableList.count; i++) {
        this.expense += consumableList.results[i].purchase_price;
      }
    });
    this.service.getMarketing().subscribe(marketingList => {
      for (let i=0; i<marketingList.count; i++) {
        this.expense += marketingList.results[i].cost;
      }
    });
    this.service.getOtherExpenses().subscribe(otherList => {
      for (let i=0; i<otherList.count; i++) {
        this.expense += otherList.results[i].cost;
      }
    });
  }

  calculate(count:number, results:Item[]) {
    for (let i=0; i<count; i++) {
      console.log(i)
      this.equity += results[i].retail_price;
      this.expense += results[i].purchase_price;
      this.expenseItems += results[i].purchase_price;
      if (results[i].sold === true) {
        this.income += results[i].retail_price;
      }
    }
  }

  initiliaze() {
    this.expense = 0;
    this.expenseItems = 0;
    this.equity = 0;
    this.income = 0;
  }

}
