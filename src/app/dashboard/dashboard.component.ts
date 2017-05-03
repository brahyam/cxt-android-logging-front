import {Component, OnInit} from '@angular/core';
import {Log} from '../log';
import {LogService} from '../log.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  logs:Log[] = [];


  constructor(private logService:LogService) {
  }

  ngOnInit():void {
    this.logService.getLogs().then(logs => this.logs = logs);
  }

}
