import {Injectable} from '@angular/core';
import {Log} from './log';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {environment} from '../environments/environment';

@Injectable()
export class LogService {

  private apiUrl = environment.apiBaseUrl + 'api/logs';

  constructor(private http: Http) {
  }

  getLogs(page: number, limit: number): Promise<Log[]> {
    return this.http.get(`${this.apiUrl}?page=${page}&perPage=${limit}&slim=true`)
      .toPromise()
      .then(response => response.json().data as Log[])
      .catch(this.handleError);
  }

  getLog(id: string): Promise<Log> {
    return this.http.get(`${this.apiUrl}/${id}`)
      .toPromise()
      .then(response => response.json().data[0] as Log)
      .catch(this.handleError);
  }

  deleteLog(id: string): Promise<Log> {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .toPromise()
      .then(response => response.json()[0] as Log)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Log Service Error:', error);
    return Promise.reject(error.message || error);
  }

  deleteOldLogs() {
    return this.http.get(`${this.apiUrl}/deleteold`)
      .toPromise()
      .then()
      .catch(this.handleError);
  }
}
