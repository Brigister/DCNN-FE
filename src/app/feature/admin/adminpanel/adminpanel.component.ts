import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/AuthService/auth.service";

@Component({
  selector: "app-adminpanel",
  templateUrl: "./adminpanel.component.html",
  styleUrls: ["./adminpanel.component.css"],
})
export class AdminpanelComponent {
  socialUser;
  loggedIn: boolean;

  constructor(public auth: AuthService) {}
}
