///<reference path="../log.ts"/>
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Log} from '../log';
import {LogService} from '../log.service';
import {environment} from '../../environments/environment';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'my-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
  providers: [LogService]
})

export class LogsComponent implements OnInit {

  public data: Log[];
  public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'createdAt';
  public sortOrder = 'desc';
  public busy: Promise<any>;
  public logs: Log[];
  public selectedLog: Log;
  public currentServerPage = 0;
  public loadedLogs = environment.maxLogs;
  public loading = false;

  constructor(private logService: LogService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getLogs(0, this.loadedLogs);
  }

  onSelect(log: Log): void {
    this.selectedLog = log;
    // this.router.navigate(['/detail', this.selectedLog._id]);
    // Navigate to log in new tab
    window.open('/detail/' + log._id, '_blank');
  }

  onDownload(log: Log): void {
    const now = new Date();
    const blob = new Blob([log.logCat], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(blob, 'LogCat-' + log.packageName + now.getTime() + '.txt');
  }

  onDelete(log: Log): void {
    if (confirm('Are you sure you want to delete?')) {
      this.logService.deleteLog(log._id).then(() => {
        this.getLogs(this.currentServerPage, this.loadedLogs);
      });
    }
  }

  getLogs(page: number, limit: number): void {
    if (page >= 0) {
      this.loading = true;
      this.currentServerPage = page;
      this.busy = this.logService.getLogs(page, limit).then(logs => {
        this.data = logs;
        this.logs = logs;
        this.loading = false;
      });
    }
  }

  deleteOldLogs() {
    if (confirm('Are you sure you want to delete?')) {
      this.logService.deleteOldLogs().then(() => {
        this.getLogs(this.currentServerPage, this.loadedLogs);
      });
    }
  }
}

