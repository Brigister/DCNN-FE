import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { GmapsDialogComponent } from "../gmaps-dialog/gmaps-dialog.component";
import { EventService } from "src/app/core/dataService/event.service";
import { MatPaginator } from "@angular/material/paginator";
import { Observable } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { Evento } from "src/app/model/interfaces";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"],
})
export class HistoryComponent implements OnInit {
  events;
  dataSource;
  obs: Observable<Evento[]>;

  constructor(public data: EventService, private dialog: MatDialog) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.data.getHistoryEvent().subscribe((data: Evento[]) => {


      this.events = new MatTableDataSource<Evento>(data);
      this.obs = this.events.connect();
      this.events.paginator = this.paginator;
    });
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
