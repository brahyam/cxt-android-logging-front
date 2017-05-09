import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Log} from '../log';
import {LogService} from '../log.service';

@Component({
  selector: 'my-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
  providers: [LogService]
})

export class LogsComponent implements OnInit {

  public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "email";
  public sortOrder = "asc";
  public busy:Promise<any>;
  public logs:Log[];
  public selectedLog:Log;

  constructor(private logService:LogService,
              private router:Router) {
  }

  ngOnInit():void {
    this.getLogs();
  }

  onSelect(log:Log):void {
    this.selectedLog = log;
    this.router.navigate(['/detail', this.selectedLog._id]);
  }

  getLogs():void {
    this.busy = this.logService.getLogs().then(logs => {
      this.data = logs;
      this.logs = logs;
    });
  }

}

