import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PhotoService } from "src/app/core/dataService/photo.service";
import { VideoclipService } from "src/app/core/dataService/videoclip.service";
import { MapmarkerService } from "src/app/core/dataService/mapmarker.service";

export interface imageData {
  id_immagini: Number;
  ordine: Number;
}

@Component({
  selector: "app-description-dialog",
  templateUrl: "./description-dialog.component.html",
  styleUrls: ["./description-dialog.component.css"],
})
export class DescriptionDialogComponent implements OnInit {
  photos;
  imageData = {
    id_immagini: null,
    ordine: null,
  };

  videoData = {
    idVideoclip: null,
    ordine: null,
  };

  markerData = {
    id: null,
    regione: null,
  };

  constructor(
    public photoService: PhotoService,
    public videoService: VideoclipService,
    public dialogRef: MatDialogRef<DescriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  updateImageOrder() {
    this.imageData.id_immagini = this.data.photo.id_immagini;
    this.photoService.patchImageOrder(this.imageData);
    this.dialogRef.close();
  }

  updateVideoOrder() {
    this.videoData.idVideoclip = this.data.video.idVideoclip;
    this.videoService.patchOrder(this.videoData);
    this.dialogRef.close();
  }

  updateRegion() {
    this.markerData.id = this.data.marker.id;
    this.dialogRef.close(this.markerData);
  }
}
