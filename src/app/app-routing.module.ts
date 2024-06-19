import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemFormComponent } from './new/item-form/item-form.component';
import { NewComponent } from './new/new.component';
import { StatsComponent } from './stats/stats.component';
import { ItemDetailsComponent } from './warehouse/item-details/item-details.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "warehouse", component: WarehouseComponent},
  {path: "warehouse/item/:id", component: ItemDetailsComponent},
  {path: "warehouse/item/:id/edit", component: ItemFormComponent},
  {path: "stats", component: StatsComponent},
  {path: "new", component: NewComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
