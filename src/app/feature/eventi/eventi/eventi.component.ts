import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { GmapsDialogComponent } from "../gmaps-dialog/gmaps-dialog.component";
import { EventService } from "src/app/core/dataService/event.service";
import { Evento } from "./../../../model/interfaces";
@Component({
  selector: "app-eventi",
  templateUrl: "./eventi.component.html",
  styleUrls: ["./eventi.component.css"],
})
export class EventiComponent implements OnInit {
  actives: Evento[];

  constructor(public data: EventService, private dialog: MatDialog) {}

  ngOnInit() {
    this.data.getActiveEvents().subscribe((data: any) => {
      console.log(data);
      this.actives = data;
    });
  }

  openDialog(id) {
    console.log(id);
    let dialogRef = this.dialog.open(GmapsDialogComponent, {
      backdropClass: "backdrop",
      panelClass: "panel",
      data: {
        event: this.actives[id],
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}
