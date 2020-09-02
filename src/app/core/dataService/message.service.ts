import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../environments/environment.prod"
import { IMessage } from 'src/app/model/interfaces';

@Injectable({
  providedIn: "root",
})
export class MessageService {
  private _contactUrl = environment.apiUrl + "contact/";

  constructor(public http: HttpClient) { }

  public startingServer() {
    return this.http.get(environment.apiUrl);
  }

  public postContact(contactData: IMessage) {
    return this.http.post<any>(this._contactUrl + "sendMail", contactData);
  }
}
