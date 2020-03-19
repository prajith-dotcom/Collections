import * as moment from 'moment';
import {Disaster} from "../models/disaster";

export class FemaModelConversorService {

  static declaredDisasters(src): Disaster[] {
    let ret: Disaster[] = [];
    for (let i in src) {
      let obj = src[i];
      let d = new Disaster(
        obj['id'],
        obj['disasterNumber'],
        obj['state'],
        obj['declarationDate'] ? moment(obj['declarationDate']) : null,
        obj['fyDeclared'],
        obj['disasterType'],
        obj['incidentType'],
        obj['title'],
        obj['incidentBeginDate'] ? moment(obj['incidentBeginDate']) : null,
        obj['incidentEndDate'] ? moment(obj['incidentEndDate']) : null,
        obj['declaredCountyArea'],
        obj['placeCode'],
        obj['disasterCloseOutDate'] ? moment(obj['disasterCloseOutDate']) : null
      );

      ret.push(d);
    }

    return ret;
  }
}

