import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { MatCarouselModule } from "@ngmodule/material-carousel";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { NavbarComponent } from './feature/navbar/navbar.component';
import { FooterComponent } from './feature/footer/footer.component';
import { HomeComponent } from "./feature/home/home.component";
import { CarouselComponent } from './feature/home/carousel/carousel.component';

import { CoreModule } from "./core/core.module";

import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    MatCarouselModule.forRoot(),
    MatCardModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
