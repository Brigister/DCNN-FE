import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadingStrategy } from "@angular/router";
import { HomeComponent } from "./feature/home/home.component";
import { ContattaciComponent } from "./feature/contattaci/contattaci.component";
import { LoginComponent } from "./feature/login/login.component";
import { AdminGuard } from "./core/guards/admin-guard/admin.guard";
import { PreloadStrategy } from "./core/preloadStrategy/preloadStrategy";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "eventi",
    loadChildren: () =>
      import("./feature/eventi/eventi.module").then((m) => m.EventiModule),
  },
  {
    path: "videoclip",
    loadChildren: () =>
      import("./feature/videoclip/videoclip.module").then(
        (m) => m.VideoclipModule
      ),
  },
  { path: "contattaci", component: ContattaciComponent },
  {
    path: "bio",
    loadChildren: () =>
      import("./feature/about/about.module").then((m) => m.AboutModule),
    data: { preload: true },
  },
  { path: "login", component: LoginComponent },
  {
    path: "admin",
    loadChildren: () =>
      import("./feature/admin/admin.module").then((m) => m.AdminModule),
    canActivate: [AdminGuard],
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
