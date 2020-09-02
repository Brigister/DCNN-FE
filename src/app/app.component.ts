import { Component, OnInit, ViewChild } from "@angular/core";
import { filter } from "rxjs/operators";
import { Router, NavigationEnd } from "@angular/router";
import { MessageService } from './core/dataService/message.service';
import { MapmarkerService } from './core/dataService/mapmarker.service';

declare var gtag;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {

  title = "#DCNN";

  running: boolean = false

  constructor(router: Router, public starting: MessageService) {

    const navEndEvent = router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
    navEndEvent.subscribe((event: NavigationEnd) => {
      gtag("config", "G-L6ZT4RK4TN", {
        page_path: event.urlAfterRedirects,
      });
    });
  }

  ngOnInit() {
    this.starting.startingServer().subscribe(() => {
      this.running = true
    })
  }
}
