import { Component, OnInit, ViewChild } from "@angular/core";

import { EventDescriptionDialogComponent } from "../event-description-dialog/event-description-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { EventService } from "src/app/core/dataService/event.service";

@Component({
  selector: "app-manage-eventi",
  templateUrl: "./manage-eventi.component.html",
  styleUrls: ["./manage-eventi.component.css"],
})
export class ManageEventiComponent implements OnInit {
  displayedColumns = ["data", "nome", "luogo", "azioni"];
  events;
  dataSource;

  constructor(private dialog: MatDialog, private data: EventService) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.data.getAllEvents().subscribe((data: any) => {
      console.log(data);
      this.events = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  refreshEventi() {
    return this.data.refreshEventDB().subscribe((res) => {
      document.getElementById("response").innerHTML = "Eventi aggiornati";
    });
  }

  refreshCover() {
    return this.data.patchCoverPhoto();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id: number) {
    this.data.deleteEvent(id);
    location.reload();
  }

  openDialog(id): void {
    let dialogRef = this.dialog.open(EventDescriptionDialogComponent, {
      backdropClass: "backdrop",
      panelClass: "panel",
      width: "60%",
      data: {
        event: this.events[id],
      },
    });

    dialogRef.afterClosed().subscribe();
  }
}
