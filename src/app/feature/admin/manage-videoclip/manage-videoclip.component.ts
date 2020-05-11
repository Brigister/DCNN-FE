import { Component, OnInit, ViewChild } from "@angular/core";
import { VideoclipService } from "src/app/core/dataService/videoclip.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { DescriptionDialogComponent } from "../description-dialog/description-dialog.component";
import { MatDialog } from "@angular/material/dialog";

export interface videoData {
  idVideoclip: String;
  nome: String;
  prodotto: String;
}
@Component({
  selector: "app-manage-videoclip",
  templateUrl: "./manage-videoclip.component.html",
  styleUrls: ["./manage-videoclip.component.css"],
})
export class ManageVideoclipComponent implements OnInit {
  videoData: videoData = {
    idVideoclip: null,
    nome: null,
    prodotto: null,
  };

  orderData = {
    idVideoclip: null,
    ordine: null,
  };

  videos;
  displayedColumns = ["nome", "prodotto", "videourl", "ordine", "azioni"];

  constructor(private data: VideoclipService, private dialog: MatDialog) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.data.getAllVideoUrl().subscribe((data: any) => {
      this.videos = new MatTableDataSource(data);
      this.videos.paginator = this.paginator;
    });
  }

  addVideo() {
    if (
      this.videoData.idVideoclip != null &&
      this.videoData.nome != null &&
      this.videoData.prodotto != null
    ) {
      this.data.postVideoclip(this.videoData).subscribe(
        (res) => {
          document.getElementById("response").innerHTML =
            "Video aggiunto con successo";
        },
        (err) => {
          document.getElementById("response").innerHTML = "Video non aggiunto";
        }
      );
    } else
      document.getElementById("response").innerHTML = "Inserisci tutti i dati";
  }

  changeVisibility(id: string, event) {
    if (event.checked || !event.checked) {
      this.data.patchVisibility(id);
    }
  }

  changeOrder() {}

  delete(id: string) {
    this.data.deleteVideoclip(id);
    location.reload();
  }

  openDialog(id): void {
    console.log(this.videos);
    let dialogRef = this.dialog.open(DescriptionDialogComponent, {
      backdropClass: "backdrop",
      panelClass: "panel",
      width: "20%",
      data: {
        video: this.videos.data[id],
      },
    });

    dialogRef.afterClosed().subscribe();
  }
}
