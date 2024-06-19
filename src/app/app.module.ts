import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { ItemComponent } from './warehouse/item/item.component';
import { ItemFormComponent } from './new/item-form/item-form.component';
import { ConsumableFormComponent } from './new/consumable-form/consumable-form.component';
import { MarketingFormComponent } from './new/marketing-form/marketing-form.component';
import { OtherFormComponent } from './new/other-form/other-form.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ItemDetailsComponent } from './warehouse/item-details/item-details.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WarehouseComponent,
    StatsComponent,
    HomeComponent,
    NewComponent,
    ItemComponent,
    ItemFormComponent,
    ConsumableFormComponent,
    MarketingFormComponent,
    OtherFormComponent,
    PaginationComponent,
    ItemDetailsComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
