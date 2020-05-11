import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class VideoclipService {
  private _videoclipUrl = "http://localhost:3000/videoclip/";

  constructor(public http: HttpClient) {}

  public getAllVideoUrl() {
    return this.http.get(this._videoclipUrl + "getVideoclip");
  }

  public getVisibileVideoUrl() {
    return this.http.get(this._videoclipUrl + "getVisibleVideoclip");
  }

  public postVideoclip(videoData) {
    return this.http.post(this._videoclipUrl + "addVideoclip", videoData);
  }

  public patchVisibility(idVideoclip) {
    return this.http
      .patch(this._videoclipUrl + idVideoclip + "/patchVisibility", null)
      .subscribe();
  }

  public patchOrder(videoData) {
    return this.http
      .patch(this._videoclipUrl + "patchOrder", videoData)
      .subscribe();
  }
  public deleteVideoclip(idVideoclip) {
    return this.http
      .delete(this._videoclipUrl + idVideoclip + "/deleteVideoclip")
      .subscribe();
  }
}
