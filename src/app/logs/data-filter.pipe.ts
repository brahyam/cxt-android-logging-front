import * as _ from 'lodash';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      // return _.filter(array, row => row.packageName.indexOf(query) > -1);
      return _.filter(array, row => {

        return (row.packageName && row.packageName.toLowerCase().indexOf(query.toLowerCase()) > -1 )
          || (row.versionName && row.versionName.toLowerCase().indexOf(query.toLowerCase()) > -1 )
          || (row.ticket && row.ticket.toLowerCase().indexOf(query.toLowerCase()) > -1)
          || (row.phoneModel && row.phoneModel.toLowerCase().indexOf(query.toLowerCase()) > -1)
          || (row.phoneBrand && row.phoneBrand.toLowerCase().indexOf(query.toLowerCase()) > -1);
      });
    }
    return array;
  }
}
