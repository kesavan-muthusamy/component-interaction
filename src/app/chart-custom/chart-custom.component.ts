import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart-custom.component.html',
  styleUrls: ['./chart-custom.component.css']
})
export class ChartCustomComponent implements OnInit {
  data: object[] = [];
  @Input() seriesType: any;

  constructor() { }

  ngOnInit() {
    this.data = [ { x: 1, y: 45}, { x: 2, y: 50}, { x: 3, y: 56}, { x: 4, y: 90} ];
  }

}
