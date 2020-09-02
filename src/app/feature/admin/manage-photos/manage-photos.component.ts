import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DescriptionDialogComponent } from "../description-dialog/description-dialog.component";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { PhotoService } from "src/app/core/dataService/photo.service";
import { IPhoto } from 'src/app/model/interfaces';

@Component({
  selector: "app-manage-photos",
  templateUrl: "./manage-photos.component.html",
  styleUrls: ["./manage-photos.component.css"],
})
export class ManagePhotosComponent implements OnInit {
  imageData = {
    image: null,
  };

  dataSource;
  displayedColumns = ["id", "foto", "ordine", "azioni"];

  constructor(private dialog: MatDialog, public data: PhotoService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this.data.getAllImages().subscribe((data: IPhoto[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  onFileSelected(event) {
    this.imageData.image = <File>event.target.files[0];
  }

  upload() {
    let fd = new FormData();
    fd.append("image", this.imageData.image, this.imageData.image.name);
    this.data.uploadImage(fd).subscribe();
  }

  changeVisibility(id: Number, event) {
    if (event.checked || !event.checked) {
      this.data.patchVisibility(id);
    }
  }

  delete(path: string) {
    const imgData = {
      path_img: path,
    };
    this.data.deletePhoto(imgData).subscribe();
    this.getPhotos();
  }

  openDialog(id): void {
    let dialogRef = this.dialog.open(DescriptionDialogComponent, {
      width: "20%",
      data: {
        photo: this.dataSource._data._value[id],
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getPhotos();
    });
  }
}
