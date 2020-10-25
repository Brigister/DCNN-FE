import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { GmapsDialogComponent } from "../gmaps-dialog/gmaps-dialog.component";
import { EventService } from "src/app/core/dataService/event.service";
import { Evento } from "./../../../model/interfaces";
import { Observable } from 'rxjs/internal/Observable';
import { defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: "app-eventi",
  templateUrl: "./eventi.component.html",
  styleUrls: ["./eventi.component.css"],
})

export class EventiComponent implements OnInit {
  empty: boolean;
  actives: Observable<Evento[]>;

  constructor(public data: EventService, private dialog: MatDialog) { }

  ngOnInit() {
    this.actives = this.data.getActiveEvents().pipe(
      defaultIfEmpty([])
    )
    console.log(this.actives);
  }

  openDialog(evento: Evento) {

    let dialogRef = this.dialog.open(GmapsDialogComponent, {
      data: {
        event: evento
      },
    });

    dialogRef.afterClosed().subscribe();
  }
}
