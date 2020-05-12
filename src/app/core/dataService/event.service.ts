import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EventService {
  private _fbapiUrl = "https://dcnn.herokuapp.com/fbapi/";
  private _eventUrl = "https://dcnn.herokuapp.com/event/";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "apllication/json",
      "Access-Control-Allow-Methods": "*",
    }),
  };
  constructor(public http: HttpClient) {}

  public getAllEvents() {
    return this.http.get(this._eventUrl + "allEvents");
  }

  public getActiveEvents() {
    return this.http.get(this._eventUrl + "activeEvent");
  }

  public getFirst3Events() {
    return this.http.get(this._eventUrl + "getFirst3Events");
  }

  public getHistoryEvent() {
    return this.http.get(this._eventUrl + "eventHistory");
  }

  public refreshEventDB() {
    debugger;
    return this.http.post(this._eventUrl + "refreshEventi", null);
  }

  public patchCoverPhoto() {
    return this.http.patch(this._eventUrl + "refreshCover", null).subscribe();
  }

  public patchEventDescription(eventData) {
    return this.http
      .patch(this._eventUrl + "patchDescription", eventData)
      .subscribe();
  }

  public deleteEvent(id: number) {
    return this.http.delete(this._eventUrl + id + "/deleteEvent").subscribe();
  }
}
