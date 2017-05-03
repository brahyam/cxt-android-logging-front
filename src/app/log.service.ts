import {Injectable} from '@angular/core';
import {Log} from './log';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {environment} from '../environments/environment';

@Injectable()
export class LogService {

  private apiUrl = environment.apiBaseUrl + 'api/logs';

  constructor(private http:Http) {
  }

  getLogs():Promise<Log[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json() as Log[])
      .catch(this.handleError);
  }

  private handleError(error:any):Promise<any> {
    console.error('Log Service Error:', error);
    return Promise.reject(error.message || error);
  }

  getLog(id:string):Promise<Log> {
    return this.getLogs().then(logs => logs.find(log => log._id === id));
  }
}