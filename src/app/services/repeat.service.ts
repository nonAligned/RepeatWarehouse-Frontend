import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buyer } from '../models/buyer.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BuyerList } from '../models/buyerList.model';
import { Consumable } from '../models/consumable.model';
import { ConsumableList } from '../models/consumableList.model';
import { Item } from '../models/item.model';
import { ItemList } from '../models/ItemList.model';
import { Marketing } from '../models/marketing.model';
import { MarketingList } from '../models/marketingList.model';
import { OtherExpense } from '../models/otherExpense.model';
import { OtherExpenseList } from '../models/otherExpenseList';

const URL_ITEMS: string = "http://localhost:3000/api/items";
const URL_CONSUMABLES: string = "http://localhost:3000/api/consumables";
const URL_MARKETINGS: string = "http://localhost:3000/api/marketings";
const URL_OTHER: string = "http://localhost:3000/api/other";
const URL_BUYERS: string = "http://localhost:3000/api/buyers";

@Injectable({
  providedIn: 'root'
})
export class RepeatService {

  constructor(private http: HttpClient) { }

  getItems(parameters?: any): Observable<ItemList> {
    let queryParams = {}
    if (parameters) {
      queryParams = {
        params: new HttpParams()
        .set("page", parameters.page && parameters.page.toString() || "")
        .set("pageSize", parameters.pageSize && parameters.pageSize.toString() || "")
        .set("sort", parameters.sort && parameters.sort.toString() || "")
        .set("sortDirection", parameters.sortDirection && parameters.sortDirection.toString() || "")
        .set("filter", parameters.filter && JSON.stringify(parameters.filter) || "")
      }
    }

    return this.http.get<Array<ItemList>>(URL_ITEMS, queryParams).pipe(map(data => {
      return new ItemList(data);
    }));
  }

  getItemById(id): Observable<Item> {
    return this.http.get(URL_ITEMS+"/"+id).pipe(map(data => {
      return new Item(data);
    }));
  }

  editItem(editedItem): Observable<Item> {
    return this.http.put(`${URL_ITEMS}/${editedItem._id}`, editedItem).pipe(map(data => {
      return new Item(data);
    }));
  }

  getConsumables(): Observable<ConsumableList> {
    return this.http.get(URL_CONSUMABLES).pipe(map(data => {
      return new ConsumableList(data);
    }));
  }

  getMarketing(): Observable<MarketingList> {
    return this.http.get(URL_MARKETINGS).pipe(map(data => {
      return new MarketingList(data);
    }));
  }

  getOtherExpenses(): Observable<OtherExpenseList> {
    return this.http.get(URL_OTHER).pipe(map(data => {
      return new OtherExpenseList(data);
    }));
  }

  getBuyers(): Observable<BuyerList> {
    return this.http.get(URL_BUYERS).pipe(map(data => {
      return new BuyerList(data);
    }));
  }

  addItem(newItem): Observable<Item> {
    return this.http.post(URL_ITEMS, newItem).pipe(map(data => {
      return new Item(data);
    }));
  }

  addConsumable(newConsumable): Observable<Consumable> {
    return this.http.post(URL_CONSUMABLES, newConsumable).pipe(map(data => {
      return new Consumable(data);
    }));
  }

  addMarketing(newMarketing): Observable<Marketing> {
    return this.http.post(URL_MARKETINGS, newMarketing).pipe(map(data => {
      return new Marketing(data);
    }));
  }

  addOtherExpense(newExpense): Observable<OtherExpense> {
    return this.http.post(URL_OTHER, newExpense).pipe(map(data => {
      return new OtherExpense(data);
    }));
  }

  addBuyer(newBuyer): Observable<Buyer> {
    return this.http.post(URL_BUYERS, newBuyer).pipe(map(data => {
      return new Buyer(data);
    }));
  }
}
