import { BrowserModule } from '@angular/platform-browser';
import { ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartCustomComponent } from './chart-custom/chart-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartCustomComponent
  ],
  imports: [
    BrowserModule,
    ChartAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
