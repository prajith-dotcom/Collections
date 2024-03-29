// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {UFSeverity} from "../app/services/ufseverity";
import {CommonConstants} from "./common-constants";

export const environment = {
  production: false,
  serviceUrl: "https://coindev:65026",
  ciscoDomain: "finesse.ibkc.int",
  // ciscoUrl: "https://coindev",
  minSeverityErrorToConsole: UFSeverity.debug,
  stateSubscriptionTimeout: 2000,
  ciscoOneExtension: true,
  ciscoExtension: "215194",
  ciscoChangeTargetNumber: true,
  ciscoTargetNumber: "5127779658",
  ciscoUser: "coinapp",
  ciscoPassword: "215194",
  ciscoDialPrefix: "91",
  version: CommonConstants.Version,
  build: CommonConstants.Build,
  evironmentCode: 'D',
  kieUrl: "http://127.0.0.1:8080/kie-server/services/rest/server",
  kieUser: "rhpamAdmin",
  kiePwd: "bank321$",
  femaUrl: "www.fema.gov/api/open/v1/DisasterDeclarationsSummaries"
};
