import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Log} from '../log';
import {LogService} from '../log.service';
import * as FileSaver from 'file-saver';

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
  public sortBy = "createdAt";
  public sortOrder = "desc";
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
    // this.router.navigate(['/detail', this.selectedLog._id]);
    // Navigate to log in new tab
    window.open('/detail/' + log._id, '_blank');
  }

  onDownload(log:Log):void {
    var now = new Date();
    var blob = new Blob([log.logCat], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "LogCat-" + log.packageName + now.getTime() + ".txt");
  }

  onDelete(log:Log):void {
    if (confirm('Are you sure you want to delete?')) {
      this.logService.deleteLog(log._id).then(log => {
        this.getLogs();
      })
    }
  }

  getLogs():void {
    this.busy = this.logService.getLogs().then(logs => {
      this.data = logs;
      this.logs = logs;
    });
  }

}

