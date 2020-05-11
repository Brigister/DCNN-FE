import { Component, OnInit } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";
import { GmapsDialogComponent } from "../eventi/gmaps-dialog/gmaps-dialog.component";
import { EventService } from "src/app/core/dataService/event.service";
import { PhotoService } from "src/app/core/dataService/photo.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  slides;
  events;

  constructor(
    private eventData: EventService,
    private imageData: PhotoService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.imageData.getVisibleImages().subscribe((data) => {
      console.log(data);
      this.slides = data;
    });
    this.eventData.getFirst3Events().subscribe((data) => {
      console.log(data);
      this.events = data;
    });

    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  openDialog(id) {
    console.log(id);
    let dialogRef = this.dialog.open(GmapsDialogComponent, {
      backdropClass: "backdrop",
      panelClass: "panel",
      data: {
        event: this.events[id],
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}
