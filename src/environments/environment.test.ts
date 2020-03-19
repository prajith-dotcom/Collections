
import {UFSeverity} from "../app/services/ufseverity";
import {CommonConstants} from "./common-constants";

export const environment = {
  production: true,
  serviceUrl: "https://cointest:65026",
  ciscoDomain: "finesse.ibkc.int",
  minSeverityErrorToConsole: UFSeverity.warn,
  stateSubscriptionTimeout: 2000,
  ciscoOneExtension: false,
  ciscoExtension: "215194",
  ciscoChangeTargetNumber: false,
  ciscoTargetNumber: "5127779658",
  ciscoUser: "coinapp",
  ciscoPassword: "215194",
  ciscoDialPrefix: "91",
  version: CommonConstants.OfficialVersion,
  build: null, //CommonConstants.Build,
  evironmentCode: 'T',
  kieUrl: "https://ibdc0app138t.ibkc.int:8443/kie-server/services/rest/server",
  kieUser: "coin",
  kiePwd: "coin",
  femaUrl: "www.fema.gov/api/open/v1/DisasterDeclarationsSummaries"
};
