import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['../home.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

}
