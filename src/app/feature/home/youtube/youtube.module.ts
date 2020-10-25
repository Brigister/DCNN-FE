import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeComponent } from './youtube.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [YoutubeComponent],
  imports: [
    CommonModule,
    YouTubePlayerModule,
    MatCardModule,
  ]
})
export class YoutubeModule {
  static components = {
    youtube: YoutubeComponent
  }
}
