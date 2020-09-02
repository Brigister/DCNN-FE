import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../environments/environment.prod"
import { Observable } from 'rxjs';
import { IMapMarker } from 'src/app/model/interfaces';

@Injectable({
  providedIn: "root",
})
export class MapmarkerService {
  private _mapmarkersUrl = environment.apiUrl + "mapmarkers/";

  constructor(public http: HttpClient) { }

  public hello() {
    return this.http.get(this._mapmarkersUrl);
  }

  public getMarkers(): Observable<IMapMarker[]> {
    return this.http.get<IMapMarker[]>(this._mapmarkersUrl + "getMarkers");
  }

  public getRegionCount() {
    return this.http.get(this._mapmarkersUrl + "getRegionCount");
  }

  public addMarker(markerData): Observable<IMapMarker> {
    return this.http.post<IMapMarker>(this._mapmarkersUrl + "addMarker", markerData);
  }

  public importMarkers(): Observable<IMapMarker[]> {
    return this.http.post<IMapMarker[]>(this._mapmarkersUrl + "importMarkers", null);
  }
  public updateRegion(data): Observable<IMapMarker> {
    return this.http.patch<IMapMarker>(this._mapmarkersUrl + "addRegion", data);
  }
  public deleteMarker(id: Number) {
    return this.http
      .delete(this._mapmarkersUrl + "deleteMarker/" + id);
  }
}
