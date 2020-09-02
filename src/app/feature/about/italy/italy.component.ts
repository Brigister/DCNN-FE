import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';


@Component({
  selector: 'app-italy',
  templateUrl: './italy.component.html',
  styleUrls: ['./italy.component.css']
})
export class ItalyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  public geoChart: GoogleChartInterface = {
    chartType: 'GeoChart',
    dataTable: [
      ['City', 'Population', 'Area'],
      ['Rome', 2761477, 1285.31],
      ['Milan', 1324110, 181.76],
      ['Naples', 959574, 117.27],
      ['Turin', 907563, 130.17],
      ['Palermo', 655875, 158.9],
      ['Genoa', 607906, 243.60],
      ['Bologna', 380181, 140.7],
      ['Florence', 371282, 102.41],
      ['Fiumicino', 67370, 213.44],
      ['Anzio', 52192, 43.43],
      ['Ciampino', 38262, 11]

    ],
    //firstRowIsData: true,
    options: {
      region: "155",
      displayMode: 'markers',
      datalessRegionColor: 'green',
      colorAxis: {
        colors: ['green', 'blue']
      },
    }
  }



}