import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {LogService} from '../log.service';
import {Log} from '../log';
import * as FileSaver from 'file-saver';

import 'rxjs/add/operator/switchMap';
import {Subscription} from 'rxjs';


@Component({
  selector: 'log-detail',
  templateUrl: './log-detail.component.html',
  styleUrls: ['./log-detail.component.css']
})

export class LogDetailComponent implements OnInit {
  @Input() log: Log;

  public busy: Subscription;

  constructor(private logService: LogService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.busy = this.route.params
      .switchMap((params: Params) => this.logService.getLog(params['id']))
      .subscribe(log => this.log = log);
  }

  goBack(): void {
    this.location.back();
  }

  onDownload(log: Log): void {
    var now = new Date();
    var blob = new Blob([log.logCat], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(blob, 'LogCat-' + log.packageName + now.getTime() + '.txt');
  }

  onDelete(log: Log): void {
    if (confirm('Are you sure you want to delete?')) {
      this.logService.deleteLog(log._id).then(log => {
        this.goBack();
      });
    }
  }
}
