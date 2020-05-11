import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MapmarkerService {
  private _mapmarkersUrl = "http://localhost:3000/mapmarkers/";

  constructor(public http: HttpClient) {}

  public getMarkers() {
    return this.http.get(this._mapmarkersUrl + "getMarkers");
  }

  public getRegionCount() {
    return this.http.get(this._mapmarkersUrl + "getRegionCount");
  }

  public addMarker(markerData) {
    return this.http.post(this._mapmarkersUrl + "addMarker", markerData);
  }

  public importMarkers() {
    return this.http.post(this._mapmarkersUrl + "importMarkes", null);
  }
  public updateRegion(data) {
    debugger;
    return this.http.patch(this._mapmarkersUrl + "addRegion", data).subscribe();
  }
  public deleteMarker(id: Number) {
    return this.http
      .delete(this._mapmarkersUrl + "deleteMarker/" + id)
      .subscribe();
  }
}
