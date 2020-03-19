import { Injectable } from '@angular/core';
import {FemaModelConversorService} from "./fema-model-conversor";
import {Disaster} from "../models/disaster";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import * as moment from "moment";

const urls = {
  general: {
    filter: "$filter",
    order: "$orderby"
  },
  fields: {
    state: "state",
    postalCode: "placeCode",
    beginDate: "incidentBeginDate"
  }
};

export const disasterSummary: string = 'DisasterDeclarationsSummaries';

@Injectable({
  providedIn: 'root'
})
export class FemaCommsService {

  constructor(private _http: HttpClient) { }

  getFipsDisasters(fips: string, stateCode: string): Promise<Disaster[]> {
    let currentDate: string = moment().subtract(30, 'days').format(moment.HTML5_FMT.DATETIME_LOCAL_MS);

    // https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$filter=state eq'LA' and placeCode eq 99051 and incidentBeginDate ge '2019-06-28T10:12:03.724'&orderby=incidentBeginDate desc
    return this._http.get<any>(FemaCommsService.getFilteredDisastersUrl(fips, stateCode, currentDate))
      .toPromise()
      .then(els => {
          if (!els || !els[disasterSummary] || els[disasterSummary].length == 0) {
            return [];
          }
          return FemaModelConversorService.declaredDisasters(els[disasterSummary]);
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  private static getFilteredDisastersUrl(fips: string, stateCode: string, beginDate: string) {
    return `https://${environment.femaUrl}?${urls.general.filter}=${urls.fields.state} eq '${stateCode}' and 
    ${urls.fields.postalCode} eq ${fips} and ${urls.fields.beginDate} ge '${beginDate}'&${urls.general.order}=${urls.fields.beginDate} desc`;
  }
}
