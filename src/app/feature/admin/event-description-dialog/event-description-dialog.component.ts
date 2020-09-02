import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-event-description-dialog",
  templateUrl: "./event-description-dialog.component.html",
  styleUrls: ["./event-description-dialog.component.css"],
})
export class EventDescriptionDialogComponent {
  eventData = {
    idEventi: this.data.event.idEventi,
    descrizione: this.data.event.Descrizione,
  };

  constructor(
    public dialogRef: MatDialogRef<EventDescriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  updateDescription() {
    this.dialogRef.close(this.eventData);
  }
}
