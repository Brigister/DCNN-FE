import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  private _contactUrl = "http://localhost:3000/contact/";

  constructor(public http: HttpClient) {}

  public getMessages() {
    return this.http.get(this._contactUrl + "getMessages");
  }

  public postContact(contactData) {
    return this.http.post<any>(this._contactUrl + "sendMail", contactData);
  }
}
