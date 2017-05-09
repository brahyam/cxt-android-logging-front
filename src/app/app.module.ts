import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {LogDetailComponent} from './log-detail/log-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LogsComponent} from './logs/logs.component';
import {AppComponent} from './app.component';
import {LogService} from "./log.service";
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './router.module';
import {DataTableModule} from "angular2-datatable";
import {BusyModule} from "angular2-busy";
import {DataFilterPipe} from "./logs/data-filter.pipe";

@NgModule({
  declarations: [
    LogsComponent,
    LogDetailComponent,
    AppComponent,
    DashboardComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule,
    BusyModule,
    BrowserAnimationsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
