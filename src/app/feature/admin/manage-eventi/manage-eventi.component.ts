import { Component, OnInit, ViewChild } from "@angular/core";

import { EventDescriptionDialogComponent } from "../event-description-dialog/event-description-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { EventService } from "src/app/core/dataService/event.service";
import { Evento } from 'src/app/model/interfaces';

@Component({
  selector: "app-manage-eventi",
  templateUrl: "./manage-eventi.component.html",
  styleUrls: ["./manage-eventi.component.css"],
})
export class ManageEventiComponent implements OnInit {
  displayedColumns = ["data", "nome", "luogo", "azioni"];
  dataSource;

  refreshed: boolean = undefined;
  error: boolean = false

  constructor(private dialog: MatDialog, private data: EventService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.getEventi();
  }

  getEventi() {
    this.data.getAllEvents().subscribe((data: Evento[]) => {

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  refreshEventi() {
    return this.data.refreshEventDB().subscribe(
      res => {
        this.refreshed = true
        this.getEventi();

      },
      err => {
        this.refreshed = false;
      }
    );
  }

  refreshCover() {
    return this.data.patchCoverPhoto().subscribe()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id: number) {
    this.data.deleteEvent(id).subscribe(
      res => {
        this.getEventi();
      },
      err => {
        this.error = true;
      }
    );

  }

  openDialog(id): void {
    let dialogRef = this.dialog.open(EventDescriptionDialogComponent, {
      panelClass: "panel",
      width: "60%",
      data: {
        event: this.dataSource._data._value[id],
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.data.patchEventDescription(result).subscribe();
      this.getEventi();
    });
  }
}
