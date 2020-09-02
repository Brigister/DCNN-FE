import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/AuthService/auth.service";
import { Router } from "@angular/router";

interface UserData {
  email: string;
  password: string;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  userData: UserData = {
    email: "",
    password: "",
  };
  error: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void { }

  loginUser(userData: UserData) {
    this.auth.loginUser(userData).subscribe(
      (res) => {
        sessionStorage.setItem("token", res["token"]);
        if (this.auth.isAdmin()) {
          this.router.navigate(["/login/admin"]);
        } else {
          this.router.navigate([""]);
        }
      },
      (err) => {
        this.error = true;
      }
    );
  }
}
