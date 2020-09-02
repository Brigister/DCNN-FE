import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }

  opened: boolean;

  ngOnInit(): void { }

  isEventiRoute() {
    return this.router.url === "/eventi";
  }

  isBioRoute() {
    return this.router.url === "/bio";
  }

  clickMenu() {
    this.opened = !this.opened;
  }
}
