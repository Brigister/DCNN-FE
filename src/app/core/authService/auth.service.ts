import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as JWT from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _userUrl = "https://dcnn.herokuapp.com/user/";

  constructor(private http: HttpClient) {}

  loginUser(user) {
    return this.http.post(this._userUrl + "login", user);
  }

  loggedIn() {
    return !!sessionStorage.getItem("token");
  }

  getToken() {
    return sessionStorage.getItem("token");
  }

  isAdmin(): boolean {
    const token = <any>JWT(this.getToken());

    return token.powerLevel;
  }
}
