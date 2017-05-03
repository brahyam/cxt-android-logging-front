import {Component, OnInit} from '@angular/core';
import {Log} from '../log';
import {LogService} from '../log.service';

@Component({
  selector: 'my-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
  providers: [LogService]
})

export class LogsComponent implements OnInit {

  constructor(private logService:LogService) {
  }

  logs:Log[];
  selectedLog:Log;

  onSelect(log:Log):void {
    this.selectedLog = log;
  }

  getLogs():void {
    this.logService.getLogs().then(logs => this.logs = logs);
  }

  ngOnInit():void {
    this.getLogs();
  }
}

