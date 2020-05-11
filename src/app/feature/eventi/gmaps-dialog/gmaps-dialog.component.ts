import { Component, ViewChild, Inject, OnInit } from "@angular/core";
import { MapInfoWindow, MapMarker } from "@angular/google-maps";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-gmaps-dialog",
  templateUrl: "./gmaps-dialog.component.html",
  styleUrls: ["./gmaps-dialog.component.css"],
})
export class GmapsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<GmapsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  center = {
    lat: this.data.event.Latitudine,
    lng: this.data.event.Longitudine,
  };
  markerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: this.data.event.Latitudine, lng: this.data.event.Longitudine },
  ];
  zoom = 8;
  display?: google.maps.LatLngLiteral;

  addMarker(data: any) {
    this.markerPositions.push(data);
  }

  /*   addMarker(event: google.maps.MouseEvent) {
   
    this.markerPositions.push(event.latLng.toJSON());
  } */

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  /*   removeLastMarker() {
    this.markerPositions.pop();
  } */
}
