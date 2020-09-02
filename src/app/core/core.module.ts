import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthService } from "./AuthService/auth.service";
import { AppRoutingModule } from "../app-routing.module";
import { EventService } from "./dataService/event.service";
import { MapmarkerService } from "./dataService/mapmarker.service";
import { MessageService } from "./dataService/message.service";
import { PhotoService } from "./dataService/photo.service";
import { VideoclipService } from "./dataService/videoclip.service";
import { TokenInterceptorService } from "./token-interceptorService/token-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AdminGuard } from "./guards/admin-guard/admin.guard";
import { PreloadStrategy } from "./preloadStrategy/preloadStrategy";

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    AuthService,
    EventService,
    MapmarkerService,
    MessageService,
    PhotoService,
    VideoclipService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    AdminGuard,
    PreloadStrategy,
  ],
  exports: [AppRoutingModule],
})
export class CoreModule { }
