import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {

  transform(array:any[], query:string):any {
    if (query) {
      // return _.filter(array, row => row.packageName.indexOf(query) > -1);
      return _.filter(array, row => {

        return (row.packageName && row.packageName.indexOf(query) > -1 )
          || (row.versionName && row.versionName.indexOf(query) > -1 )
          || (row.ticket && row.ticket.indexOf(query) > -1);
      });
    }
    return array;
  }
}
