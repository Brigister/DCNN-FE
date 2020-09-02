import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../../environments/environment.prod"
import { Observable } from 'rxjs';
import { Evento } from 'src/app/model/interfaces';

@Injectable({
  providedIn: "root",
})
export class EventService {
  private _eventUrl = environment.apiUrl + "event/";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "apllication/json",
      "Access-Control-Allow-Methods": "*",
    }),
  };
  constructor(public http: HttpClient) { }

  public getAllEvents(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this._eventUrl + "allEvents");
  }

  public getActiveEvents(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this._eventUrl + "activeEvent");
  }

  public getFirst3Events(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this._eventUrl + "getFirst3Events");
  }

  public getHistoryEvent(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this._eventUrl + "eventHistory");
  }

  public refreshEventDB(): Observable<Evento[]> {
    return this.http.post<Evento[]>(this._eventUrl + "refreshEventi", null);
  }

  public patchCoverPhoto(): Observable<Evento[]> {
    return this.http.patch<Evento[]>(this._eventUrl + "refreshCover", null);
  }

  public patchEventDescription(eventData): Observable<Evento> {
    return this.http.patch<Evento>(this._eventUrl + "patchDescription", eventData)

  }

  public deleteEvent(id: number) {
    return this.http.delete(this._eventUrl + id + "/deleteEvent");
  }
}
