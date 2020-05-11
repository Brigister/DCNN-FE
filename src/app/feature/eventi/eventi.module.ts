import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { GoogleMapsModule } from "@angular/google-maps";

import { MatGridListModule } from "@angular/material/grid-list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

import { EventiComponent } from "./eventi/eventi.component";
import { HistoryComponent } from "./history/history.component";
import { GmapsDialogComponent } from "./gmaps-dialog/gmaps-dialog.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDividerModule } from "@angular/material/divider";
import { MatPaginatorModule } from "@angular/material/paginator";

const appRoutes: Routes = [
  { path: "", component: EventiComponent },
  { path: "history", component: HistoryComponent },
];

@NgModule({
  declarations: [EventiComponent, HistoryComponent, GmapsDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    GoogleMapsModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatExpansionModule,
    MatDividerModule,
    MatPaginatorModule,
  ],
  entryComponents: [GmapsDialogComponent],
})
export class EventiModule {}
