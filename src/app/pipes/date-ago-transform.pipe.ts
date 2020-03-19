import {Pipe, PipeTransform} from '@angular/core';

import * as moment from 'moment';

//deprecated errors
// const m = require('moment');
// m.suppressDeprecationWarnings = true;

@Pipe({
  name: 'dateAgoTransform'
})
export class DateAgoTransformPipe implements PipeTransform {

  /*
  *
  * We pass 1 value:
  * 1. Number Date from the Json
  *
  * */
  transform(dateComp1: number, dateComp2?: number): any {
    if (!dateComp1) {
      return "";
    }

    let ret = "";
    let today: moment.Moment = dateComp2 ? moment(dateComp2) : moment();
    let date: moment.Moment = moment(dateComp1);

    let diffDays = today.diff(date, 'days');
    if (diffDays === 0) {
      let diffHours = today.diff(date, 'hours');
      if (diffHours === 0) {
        let diffMins = today.diff(date, 'minutes');
        if (diffMins === 0) {
          return "A few seconds ago";
        }
        return diffMins + " minutes ago";
      }
      return diffHours + " hours ago";
    }
    return diffDays + " days ago";
  }

}
