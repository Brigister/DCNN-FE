import { Component, OnInit, Type } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";
import { GmapsDialogComponent } from "../eventi/gmaps-dialog/gmaps-dialog.component";
import { EventService } from "src/app/core/dataService/event.service";
import { YoutubeComponent } from './youtube/youtube.component';
import { Evento } from 'src/app/model/interfaces';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  events: Observable<Evento[]>;
  component: Type<YoutubeComponent>;

  constructor(
    private eventData: EventService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.events = this.eventData.getFirst3Events()

    if (!this.events) {
      import("./youtube/youtube.module")
        .then(m => m.YoutubeModule)
        .then(lazyModule => {
          this.component = (lazyModule.components.youtube)
        })
    }
  }

  openDialog(evento: Evento) {
    let dialogRef = this.dialog.open(GmapsDialogComponent, {
      data: {
        event: evento
      },
    });

    dialogRef.afterClosed().subscribe()

  }
}
