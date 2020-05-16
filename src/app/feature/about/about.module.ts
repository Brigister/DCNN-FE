import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BioComponent } from "./bio/bio.component";
import { BandComponent } from "./band/band.component";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: "", component: BioComponent },
  { path: "band", component: BandComponent },
];

@NgModule({
  declarations: [BioComponent, BandComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatCardModule,
    MatGridListModule,
  ],
})
export class AboutModule {}
