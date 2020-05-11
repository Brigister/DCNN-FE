import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MapmarkerService } from "src/app/core/dataService/mapmarker.service";
import { MatDialog } from "@angular/material/dialog";
import { DescriptionDialogComponent } from "../description-dialog/description-dialog.component";

interface mapMarker {
  lat: Number;
  lng: Number;
  luogo: String;
  regione: String;
}

@Component({
  selector: "app-manage-map-markers",
  templateUrl: "./manage-map-markers.component.html",
  styleUrls: ["./manage-map-markers.component.css"],
})
export class ManageMapMarkersComponent implements OnInit {
  markerData: mapMarker = {
    lat: null,
    lng: null,
    luogo: null,
    regione: null,
  };
  mapMarkers;
  displayedColumns: string[] = ["luogo", "regione", "azioni"];

  /*   markerData: mapMarker; */

  constructor(private data: MapmarkerService, private dialog: MatDialog) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.data.getMarkers().subscribe((data: any) => {
      this.mapMarkers = new MatTableDataSource(data);
      this.mapMarkers.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.mapMarkers.filter = filterValue.trim().toLowerCase();
  }

  uploadMarker() {
    console.log(this.markerData);
    if (this.markerData.lat == null || this.markerData.lng == null) {
      document.getElementById("response").innerHTML = "Inserisci la posizione";
    } else {
      this.data.addMarker(this.markerData).subscribe(
        (res) => {
          document.getElementById("response").innerHTML =
            "Marker aggiunto con successo";
        },
        (err) => {
          console.log(err);
          document.getElementById("response").innerHTML = "Marker non aggiunto";
        }
      );
    }
  }

  openDialog(id): void {
    console.log(this.mapMarkers._data._value[id]);
    let dialogRef = this.dialog.open(DescriptionDialogComponent, {
      backdropClass: "backdrop",
      panelClass: "panel",
      width: "20%",
      data: {
        marker: this.mapMarkers._data._value[id],
      },
    });

    dialogRef.afterClosed().subscribe();
  }
  updateRegion(id: Number) {
    this.data.updateRegion(id);
  }

  deleteMarker(id: Number) {
    this.data.deleteMarker(id);
    location.reload();
  }
}
