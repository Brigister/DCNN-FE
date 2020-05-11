import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { YouTubePlayerModule } from "@angular/youtube-player";

import { MatCardModule } from "@angular/material/card";

import { VideoclipComponent } from "./videoclip/videoclip.component";

const routes = [{ path: "", component: VideoclipComponent }];

@NgModule({
  declarations: [VideoclipComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YouTubePlayerModule,
    MatCardModule,
  ],
})
export class VideoclipModule {}
