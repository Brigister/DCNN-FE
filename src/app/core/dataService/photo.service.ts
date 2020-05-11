import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  private _albumUrl = "http://localhost:3000/album/";

  constructor(public http: HttpClient) {}

  public getAllImages() {
    return this.http.get(this._albumUrl + "getAllPhotos");
  }

  public getVisibleImages() {
    return this.http.get(this._albumUrl + "getVisiblePhotos");
  }
  public uploadImage(formData) {
    return this.http.post(this._albumUrl + "postPhoto", formData);
  }

  public patchVisibility(id: Number) {
    return this.http
      .patch(this._albumUrl + id + "/patchVisibility", null)
      .subscribe();
  }

  public patchImageOrder(imageData) {
    return this.http
      .patch(this._albumUrl + "patchOrder", imageData)
      .subscribe();
  }

  public deletePhoto(imgData) {
    debugger;
    return this.http.delete(this._albumUrl + "deletePhoto", imgData);
  }
}
