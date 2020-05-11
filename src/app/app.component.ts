import { Component, OnInit } from "@angular/core";
import { filter } from "rxjs/operators";
import { Router, NavigationEnd } from "@angular/router";

declare var gtag;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(router: Router) {
    const navEndEvent = router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
    navEndEvent.subscribe((event: NavigationEnd) => {
      gtag("config", "G-L6ZT4RK4TN", {
        page_path: event.urlAfterRedirects,
      });
    });
  }

  title = "DCNN";
}
