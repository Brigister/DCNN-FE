import { Component, OnInit, ViewChild } from "@angular/core";
import { VideoclipService } from "src/app/core/dataService/videoclip.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { DescriptionDialogComponent } from "../description-dialog/description-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { IVideoclip } from 'src/app/model/interfaces';

@Component({
  selector: "app-manage-videoclip",
  templateUrl: "./manage-videoclip.component.html",
  styleUrls: ["./manage-videoclip.component.css"],
})
export class ManageVideoclipComponent implements OnInit {
  videoData: IVideoclip = {
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

  constructor(private data: VideoclipService, private dialog: MatDialog) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.getVideo();
  }

  getVideo() {
    this.data.getAllVideoUrl().subscribe((data: IVideoclip[]) => {
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
          this.getVideo();
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



  delete(id: string) {

    this.data.deleteVideoclip(id).subscribe(
      res => {
        this.getVideo();
      },
      err => {
        document.getElementById("response").innerHTML = "Video non eliminato"
      }
    );
  }

  openDialog(id): void {
    let dialogRef = this.dialog.open(DescriptionDialogComponent, {
      width: "20%",
      data: {
        video: this.videos.data[id],
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getVideo();
    });
  }
}
