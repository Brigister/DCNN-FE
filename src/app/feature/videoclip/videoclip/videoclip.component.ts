import { Component, OnInit } from "@angular/core";
import { VideoclipService } from "src/app/core/dataService/videoclip.service";

@Component({
  selector: "app-videoclip",
  templateUrl: "./videoclip.component.html",
  styleUrls: ["./videoclip.component.css"],
})
export class VideoclipComponent implements OnInit {
  videos;
  constructor(private data: VideoclipService) {}

  ngOnInit() {
    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    this.data.getVisibileVideoUrl().subscribe((data) => {
      console.log(data);
      this.videos = data;
    });
  }
}
