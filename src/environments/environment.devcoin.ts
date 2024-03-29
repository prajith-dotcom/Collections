import {UFSeverity} from "../app/services/ufseverity";
import {CommonConstants} from "./common-constants";

export const environment = {
  production: false,
  serviceUrl: "https://coindev:65026",
  ciscoDomain: "finesse.ibkc.int",
  minSeverityErrorToConsole: UFSeverity.warn,
  stateSubscriptionTimeout: 2000,
  ciscoOneExtension: true,
  ciscoExtension: "215194",
  ciscoChangeTargetNumber: true,  // If true, uses allways ciscoTargetNumber for outbound calls
  ciscoTargetNumber: "5127779658",
  ciscoUser: "coinapp",
  ciscoPassword: "215194",
  ciscoDialPrefix: "91",
  version: CommonConstants.Version,
  build: CommonConstants.Build,
  evironmentCode: 'DC',
  kieUrl: "https://ibdc0app138d.ibkc.int:8443/kie-server/services/rest/server",
  kieUser: "coin",
  kiePwd: "coin",
  femaUrl: "www.fema.gov/api/open/v1/DisasterDeclarationsSummaries"
};
