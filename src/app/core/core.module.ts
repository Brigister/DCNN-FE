import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialModule } from "./material/material.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

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

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule, MaterialModule],
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
  exports: [AppRoutingModule, NavbarComponent, FooterComponent, MaterialModule],
})
export class CoreModule {}
