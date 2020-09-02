import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/core/dataService/photo.service';
import { IPhoto } from '../../../model/interfaces'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slides: Observable<IPhoto[]>;
  constructor(private imageData: PhotoService) { }

  ngOnInit(): void {
    this.slides = this.imageData.getVisibleImages();
  }

}
