import  {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {LogDetailComponent} from './log-detail/log-detail.component';

import {LogsComponent} from './logs/logs.component';
import {AppComponent} from './app.component';
import {LogService} from "./log.service";
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './router.module';

@NgModule({
  declarations: [
    LogsComponent,
    LogDetailComponent,
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
