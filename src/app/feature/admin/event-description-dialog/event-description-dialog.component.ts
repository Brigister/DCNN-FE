import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { EventService } from "src/app/core/dataService/event.service";

@Component({
  selector: "app-event-description-dialog",
  templateUrl: "./event-description-dialog.component.html",
  styleUrls: ["./event-description-dialog.component.css"],
})
export class EventDescriptionDialogComponent implements OnInit {
  eventData = {
    idEventi: this.data.event.idEventi,
    descrizione: this.data.event.Descrizione,
  };

  constructor(
    public eventService: EventService,
    public dialogRef: MatDialogRef<EventDescriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  updateDescription() {
    this.eventService.patchEventDescription(this.eventData);
    location.reload();
    this.dialogRef.close();
  }
}
