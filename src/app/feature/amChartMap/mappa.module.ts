import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { MappaComponent } from "./mappa/mappa.component";
import { MatGridListModule } from "@angular/material/grid-list";

const routes: Routes = [{ path: "", component: MappaComponent }];

@NgModule({
  declarations: [MappaComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatGridListModule],
})
export class MappaModule {}
