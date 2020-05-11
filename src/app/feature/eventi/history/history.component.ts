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
  obs: Observable<any>;

  constructor(public data: EventService, private dialog: MatDialog) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.data.getHistoryEvent().subscribe((data: any) => {
      console.log(data);

      this.events = new MatTableDataSource<any>(data);
      this.obs = this.events.connect();
      this.events.paginator = this.paginator;
    });
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
