import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {LogService} from '../log.service';
import {Log} from "../log";

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'log-detail',
  templateUrl: './log-detail.component.html',
  styleUrls: ['./log-detail.component.css']
})

export class LogDetailComponent implements OnInit {
  @Input() log:Log;

  constructor(private logService:LogService,
              private route:ActivatedRoute,
              private location:Location) {
  }

  ngOnInit():void {
    this.route.params
      .switchMap((params:Params) => this.logService.getLog(params['id']))
      .subscribe(log => this.log = log);
  }

  goBack():void {
    this.location.back();
  }

}
