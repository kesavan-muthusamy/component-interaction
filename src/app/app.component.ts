import { Component } from '@angular/core';
import { ChartSeriesType, AccumulationType } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chartTypes: any[] = ['Line', 'Bar', 'Spline', 'StepLine', 'Column'];
}
