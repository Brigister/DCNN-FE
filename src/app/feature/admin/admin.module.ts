import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatSelectModule } from "@angular/material/select";

import { ManagePhotosComponent } from "./manage-photos/manage-photos.component";
import { DescriptionDialogComponent } from "./description-dialog/description-dialog.component";
import { AdminpanelComponent } from "./adminpanel/adminpanel.component";
import { ManageMapMarkersComponent } from "./manage-map-markers/manage-map-markers.component";
import { ManageEventiComponent } from "./manage-eventi/manage-eventi.component";
import { EventDescriptionDialogComponent } from "./event-description-dialog/event-description-dialog.component";
import { ManageVideoclipComponent } from "./manage-videoclip/manage-videoclip.component";

const appRoutes: Routes = [
  {
    path: "",
    component: AdminpanelComponent,
    children: [
      { path: "managephotos", component: ManagePhotosComponent },
      { path: "managemapmarkers", component: ManageMapMarkersComponent },
      { path: "manageeventi", component: ManageEventiComponent },
      { path: "managevideoclip", component: ManageVideoclipComponent },
    ],
  },

  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  declarations: [
    ManagePhotosComponent,
    DescriptionDialogComponent,
    AdminpanelComponent,
    ManageMapMarkersComponent,
    ManageEventiComponent,
    DescriptionDialogComponent,
    EventDescriptionDialogComponent,
    ManageVideoclipComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
  ],
  providers: [],
  entryComponents: [],
})
export class AdminModule {}
