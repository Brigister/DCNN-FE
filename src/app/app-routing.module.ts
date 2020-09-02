import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadingStrategy } from "@angular/router";
import { HomeComponent } from "./feature/home/home.component";
import { ContattaciComponent } from "./feature/contattaci/contattaci/contattaci.component";
/* import { LoginComponent } from "./feature/login/login.component"; */
import { AdminGuard } from "./core/guards/admin-guard/admin.guard";
import { PreloadStrategy } from "./core/preloadStrategy/preloadStrategy";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "eventi",
    loadChildren: () =>
      import("./feature/eventi/eventi.module").then((m) => m.EventiModule),
    data: { preload: true },
  },
  {
    path: "videoclip",
    loadChildren: () =>
      import("./feature/videoclip/videoclip.module").then(
        (m) => m.VideoclipModule
      ),
  },
  {
    path: "contattaci", loadChildren: () =>
      import("./feature/contattaci/contattaci.module").then((m) => m.ContattaciModule),
  },
  {
    path: "bio",
    loadChildren: () =>
      import("./feature/about/about.module").then((m) => m.AboutModule),
    data: { preload: true },
  },
  {
    path: "login", loadChildren: () =>
      import("./feature/admin/admin.module").then((m) => m.AdminModule),

  },
  /*   {
      path: "admin",
      
    }, */
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
