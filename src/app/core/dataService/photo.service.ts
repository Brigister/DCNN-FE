import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../environments/environment.prod"
import { Observable } from 'rxjs';
import { IPhoto } from '../../model/interfaces'

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  private _albumUrl = environment.apiUrl + "album/";

  constructor(public http: HttpClient) { }

  public getAllImages(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this._albumUrl + "getAllPhotos");
  }

  public getVisibleImages(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this._albumUrl + "getVisiblePhotos");
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
    return this.http.delete(this._albumUrl + "deletePhoto", imgData);
  }
}
