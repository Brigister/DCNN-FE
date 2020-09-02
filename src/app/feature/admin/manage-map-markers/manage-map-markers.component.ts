import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MapmarkerService } from "src/app/core/dataService/mapmarker.service";
import { MatDialog } from "@angular/material/dialog";
import { DescriptionDialogComponent } from "../description-dialog/description-dialog.component";
import { IMapMarker } from 'src/app/model/interfaces';

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

  response?: boolean = undefined;
  imported?: boolean = undefined;
  error: boolean = false;

  constructor(private data: MapmarkerService, private dialog: MatDialog) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.getMarkers();
  }

  getMarkers() {
    this.data.getMarkers().subscribe((data: IMapMarker[]) => {
      this.mapMarkers = new MatTableDataSource(data);
      this.mapMarkers.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.mapMarkers.filter = filterValue.trim().toLowerCase();
  }



  uploadMarker() {
    if (this.markerData.lat == null || this.markerData.lng == null) {
      this.error = true;
    } else {
      this.data.addMarker(this.markerData).subscribe(
        (res) => {
          this.response = true;
          this.getMarkers();
        },
        (err) => {
          this.response = false;
        }
      );
    }
  }

  openDialog(id): void {
    let dialogRef = this.dialog.open(DescriptionDialogComponent, {
      backdropClass: "backdrop",
      panelClass: "panel",
      width: "20%",
      data: {
        marker: this.mapMarkers._data._value[id],
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.data.updateRegion(result).subscribe();
      this.getMarkers();

    });

  }
  updateRegion(id: Number) {
    this.data.updateRegion(id);
  }

  importMarkers() {
    this.data.importMarkers().subscribe(
      (res) => {
        this.imported = true;
        this.getMarkers();
      },
      (err) => {
        this.imported = false;
      }
    );
  }

  deleteMarker(id: Number) {
    this.data.deleteMarker(id).subscribe(
      res => {
        this.getMarkers();
      }
    )
  }
}
