import { Component, OnInit, NgZone } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_italyHigh from "@amcharts/amcharts4-geodata/italyHigh";
import { MapmarkerService } from "src/app/core/dataService/mapmarker.service";

@Component({
  selector: "app-bio",
  templateUrl: "./bio.component.html",
  styleUrls: ["./bio.component.css"],
})
export class BioComponent implements OnInit {
  regionCounts;

  constructor(private zone: NgZone, private data: MapmarkerService) {}
  private map: am4maps.MapChart;

  ngOnInit() {
    this.data.getRegionCount().subscribe((data: any) => {
      console.log(data);
      this.regionCounts = data;
    });
  }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chartMap = am4core.create("chartdiv", am4maps.MapChart);
      chartMap.geodata = am4geodata_italyHigh;
      chartMap.projection = new am4maps.projections.Miller();

      let polygonSeries = chartMap.series.push(new am4maps.MapPolygonSeries());
      polygonSeries.useGeodata = true;
      chartMap.series.push(polygonSeries);

      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonSeries.exclude = ["FR-H", "MT"];
      polygonTemplate.tooltipText = "{name}";
      //polygonTemplate.propertyFields =" "
      polygonTemplate.fill = am4core.color("#74B266");

      let imageSeries = chartMap.series.push(new am4maps.MapImageSeries());

      let imageSeriesTemplate = imageSeries.mapImages.template;
      let circle = imageSeriesTemplate.createChild(am4core.Circle);
      circle.radius = 4;
      circle.fill = am4core.color("#FF0000");
      circle.stroke = am4core.color("#FFFFFF");
      circle.strokeWidth = 2;
      circle.nonScaling = true;
      circle.tooltipText = "{luogo}";

      imageSeriesTemplate.propertyFields.latitude = "lat";
      imageSeriesTemplate.propertyFields.longitude = "lng";

      this.data.getMarkers().subscribe((data: any) => {
        console.log(data);
        imageSeries.data = data;
      });
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.map) {
        this.map.dispose();
      }
    });
  }
}
