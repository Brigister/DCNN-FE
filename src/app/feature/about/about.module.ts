import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BioComponent } from "./bio/bio.component";
import { BandComponent } from "./band/band.component";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { Routes, RouterModule } from "@angular/router";
import { ItalyComponent } from './italy/italy.component';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';

const MyGoogleChartsSettings: GoogleChartsSettings = {
  mapsApiKey: 'AIzaSyDNsIWFbwvtk8JhOBNX6RSB9kU442YgRos',
  googleChartsVersion: '46',
  language: 'it',
};

const appRoutes: Routes = [
  { path: "", component: BioComponent },
  { path: "band", component: BandComponent },
];

@NgModule({
  declarations: [BioComponent, BandComponent, ItalyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatCardModule,
    MatGridListModule,
    Ng2GoogleChartsModule,
  ],
  providers: [
    {
      provide: 'googleChartsSettings',
      useValue: MyGoogleChartsSettings,
    }

  ]
})
export class AboutModule { }
