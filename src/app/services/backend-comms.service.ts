import {BackendModelConversorService} from "./backend-model-conversor";

import {Customer} from "../models/customer";
import {Agent} from "../models/agent";

import {environment} from "../../environments/environment";

import {Injectable} from '@angular/core';
import {Account, AccountHistoryEntry} from "../models/account";

import 'rxjs/add/operator/toPromise';
import {CustomerNote} from "../models/customer-note";
import {SearchAccountCriteriaParams} from "../models/search-account-criteria-params";
import {Campaign} from "../models/campaign";
import {UFSeverity} from "./ufseverity";
import {UFNotification, UserFeedbackService} from "./user-feedback.service";
import {GlobalStateService} from "./global-state.service";
import {CallRecord} from "../models/call-record";
import {CampaignStatsToken} from "../models/campaign-stats-token";
import {CollectorProductivityRecord} from "../models/collector-productivity-record";
import {DatePipe} from "@angular/common";
import {CampaignList} from "../models/campaign-list";
import {CampaignListRecord} from "../models/campaign-list-record";
import {OverallProductivityRecord} from "../models/overall-productivity-record";
import {Role} from "../models/role";
import {CampaignListAccount} from "../models/campign-list-accounts";
import {CallsPersHour} from "../models/callsPersHour";
import {IncomingCalls} from "../models/incomingCalls";
import {ContactPercentage} from "../models/contact-percentage";
import {CancelCampaignCallRecordReason} from "../models/cancel-campaign-call-record-reason";
import {BooleanToStringPipe} from "../pipes/boolean-to-string.pipe";
import {CampaignRecordHistory} from "../models/campaign-record-history";
import {TicklerProcess} from "../models/tickler-processes";
import {TicklerType} from "../models/tickler-types";
import {ProcessCase} from "../models/process-case";
import {ProcessCaseTickler} from "../models/process-case-tickler";
import {TicklerTypeMap} from "../models/tickler-type-map";
import {TicklerAttribute} from "../models/tickler-attribute";
import {TicklerAttributeMap} from "../models/tickler-attribute-map";
import {TicklerAttributeModel} from "../models/tickler-attribute-model";
import {CustomerConsent} from "../models/customer-consent";
import {CampaignListOrderByType} from "../models/cl-order-by-type";
import {BooleanToStringOrderPipe, BooleanToStringDuePipe} from "../pipes/boolean-to-string-order.pipe";
import {Code} from "../models/code";
import {ConsentPipe, ConsentPipeCorrectConversion} from "../pipes/consent.pipe";
import {TelephonePipe} from "../pipes/telephone.pipe";
import {LovType} from "../models/lov-types";
import {LovValue} from "../models/lov-values";
import {MemoNote} from "../models/memo-note";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {forEach} from "@angular/router/src/utils/collection";
import {promise} from "selenium-webdriver";
import {BPMCase, BPMProcessInstance, BPMProcessType} from "../models/bpm-case";
import {PamModelConversorService} from "./pam-model-conversor";
import {VerificationStatus} from "../models/addressVerification";


const urls = {
  general: {
    authKey: "Authorization",
    tsIEKey: "tsIE",
    prefix: "/api/",
    version: "/v1",
    headers: {
      content: {key: "Content-Type", value: "application/json"}
    }
  },
  getToken: {
    url: "token",
    headers: [
      {key: "Accept", value: "application/json"},
      {key: "Content-Type", value: "application/x-www-form-urlencoded"}
    ],
    user: "username",
    password: "password",
    grant_type: {key: "grant_type", value: "password"}
  },
  custInq: {url: "custInq", customerId: "customerId"},
  acctSrch: {url: "acctSrch", customerId: "customerId", accountType: "accountType"},
  custSrch: {
    url: "custsrch",
    taxId: "taxId",
    accountId: "accountId",
    phone: "phoneNr",
    email: "emailAddr",
    accountType: "accountType",
    bankruptcy: "BankruptcyCase"
  },
  custNotes: {
    url: "custmsg",
    customerId: "customerId",
    accId: "accountId",
    accType: "accountType",
    msgType: "msgType",
    collectionFilter: "Col",
    alertFilter: "Alert"
  },
  callRecords: {url: "callrecords", customerId: "customerId"},
  nextAccount: {url: "accounts/next", campaignCd: "campaignCd", userCd: "userCd"},
  acctInq: {url: "acctInq", accId: "accountId", accType: "accountType"},
  addCallRecord: {url: "callrecords"},
  cancelRecord: {url: "clrecords"},
  userCampaigns: {url: "usercampaigns", userCd: "userCd"},
  users: {url: "users", userCd: "userCd"},
  acctHistSrch: {url: "acctHistSrch", accountId: "accountId", accountType: "accountType"},
  collectorsProductivity: {url: "reports/collectors_productivity", startDt: "StartDt" /*, endDt: "EndDt"*/},
  overallProductivity: {url: "reports/overall_productivity", startDt: "StartDt", endDt: "EndDt"},
  campaigStat: {url: "stat"},
  campaignListStat: {url: "statistics/cl", campaingListId: "campaignListId"},
  roles: {url: "roles"},
  userRoles: {url: "userroles"},
  campaigns: {url: "campaigns"},
  campaignList: {
    url: "campaignlists",
    statusCd: "StatusCd",
    campaignCd: "CampaignCd",
    pageNum: "pagenr",
    pageSize: "pagesize"
  },
  campaignListLaunch: {url: "campaignlists/launch"},
  campaignListRecord: {url: "clrecords", statusCd: "statusCd", listId: "clid", pageNum: "pagenr", pageSize: "pagesize"},
  campaignListAccount: {
    url: "claccounts",
    campaignCd: "CampaignCd",
    customerName: "CustomerName",
    statusCd: "StatusCd",
    accountId: "AccountId",
    cifId: "CifId",
    pageNr: "PageNr",
    pageSize: "PageSize"

  },
  callsPersHour: {
    url: "reports/calls_per_collector_by_hour",
    campaignCd: "CampaignCd",
    startDt: "StartDt"
  },
  incomingCalls: {
    url: "reports/calls_incoming_by_hour",
    startDt: "StartDt"
  },
  contactPercentage: {
    url: "reports/contact_pct_by_hour",
    campaignCd: "CampaignCd",
    startDt: "StartDt"
  },
  campaignRecordHistory: {
    url: "account/history",
    accountId: "AccountId",
  },
  todayContact: {
    url: "statistics/customer_calls_count",
    customerId: "CustomerId",
    startDt: "startDt"
  },
  accountContacts: {
    url: "statistics/account_calls_count",
    customerId: "AccountId",
    startDt: "StartDt"
  },
  cancelReasons: {url: "dictionary/cancel_types"},
  lovTypes: {
    url: "lov/types",
    id: "Id"
  },
  lovValues: {
    url: "lov/values",
    lovCd: "LovCd",
    id: "Id",
    deletedBy: "DeletedBy"
  },
  ticklerProcesses: {
    url: "tp/processes"
  },
  ticklerTypes: {
    url: "tp/tickler_types",
    processId: "ProcessId",
    id: "Id"
  },
  processCase: {
    url: "tp/cases",
    id: "Id",
    accountId: "AccountId",
    cifId: "CifId",
    assignedUser: "AssignedUser",
    processCode: "ProcessCd",
    statusCode: "StatusCd",
    followUpDueCode: "FollowUpDueCd",
    orderBy: "OrderBy",
    pageNr: "PageNr",
    pageSize: "PageSize"
  },
  processCaseTickler: {
    url: "tp/case_ticklers",
    caseId: "CaseId",
    pageNr: "PageNr",
    pageSize: "PageSize",
    id: "Id",
    DeletedBy: "DeletedBy",
    isCore: "IsCore"
  },
  ticklersMap: {
    url: "tp/ticklers_map",
    ticklerFromId: "TicklerFromId",
    id: "Id"
  },
  ticklerAttribute: {
    url: "tp/tickler_attribute_types"
  },
  ticklerAttributeMap: {
    url: "tp/ticklers_atb_map",
    ticklerTypeId: "TicklerTypeId",
    id: "Id"
  },
  customerConsent: {
    url: "customer/consent",
    cifId: "CifId",
    phoneNumber: "PhoneN"
  },
  campaignListOrderByTypes: {
    url: "dictionary/cl_orderby_types",
    campaignType: "CampaignType"
  },
  campaignListOrderBy: {
    url: "campaignlists/orderby"
  },
  listOfValues: {
    url: "dictionary/lov",
    lovCode: "LovCd"
  },
  callNotes: {
    url: "callnotes",
    accountId: "AccountId",
    accountType: "AccountType",
    customerId: "CifId",
    pageNr: "PageNr",
    pageSize: "PageSize",
  },
  addressVerification: {url: "customer/address"},
  emailVerification: {url: "customer/email"},
  phoneVerification: {url: "customer/phone"},
  accountProcesses: {
    url: "pam/account_processes",
    urlAbort: "pam/account_processes/abort"
  },
  processTypes: {url: "pam/process_types"},
  accountProcessesDetails: {
    url: "pam/account_processes_details",
    processInstanceId: "ProcessInstanceId"
  },
  loanImports: {url: "sourcedata/run"},
  depositImports: {url: "sourcedata/run/deposit_accounts"},
  user: "user",
  custMsg: {url: "custMsg"}
};

let ufs: UserFeedbackService = null;
let gss: GlobalStateService = null;

const DatePatern = 'yyyy-MM-dd';
const CoreProcessCaseTickler = 'Y';

@Injectable()
export class BackendCommsService {

  // Current session token
  private _sessionToken = null;
  private _globalStateService: GlobalStateService = null;

  constructor(private _http: HttpClient,
              // Circular dependency! It will be injected in AppComponent
              //private _globalStateService: GlobalStateService,
              private _userFeedbackService: UserFeedbackService,
              private _datePipe: DatePipe,
              private _booleanToStringPipe: BooleanToStringPipe,
              private _phonePipe: TelephonePipe,
              private _consentPipe: ConsentPipeCorrectConversion,
              private _booleanToStringOrderPipe: BooleanToStringOrderPipe,
              private _booleanToStringOrderPipe2: BooleanToStringDuePipe) {
    ufs = this._userFeedbackService;
  }

  setGlobalStateService(g: GlobalStateService) {
    this._globalStateService = g;
    gss = g;
  }

  loginHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    urls.getToken.headers.forEach((h) => {
      headers = headers.set(h.key, h.value);
    });
    return headers;
  }

  login(login: string, pwd: string): Promise<Agent> {
    let headerObj = {
      headers: this.loginHeader(),
    };

    // Set body
    let bodyurl = encodeURI(`grant_type=password&username=${login}&password=${pwd}`);
    // console.log(bodyurl);

    return this._http.post<any>(BackendCommsService.getSimpleUrl(urls.getToken.url), bodyurl, headerObj)
      .toPromise()
      .then(resj => {
        console.log(resj);
        // If no token received, error
        if (resj.access_token == undefined) {
          // TODO: errors with codes
          throw "No access token received";
        }
        // Cache session token
        this._sessionToken = `Bearer ${resj.access_token}`;
        // Return an agent
        let ret = new Agent();
        ret.account = login;
        return ret;
      })
      .catch(this.handleError);
  }

  importLoanAccounts(): Promise<number>{
    let params = this.getParamsWithOwner();
    const options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.loanImports.url), options)
      .toPromise()
      .then(resj => {
        if (!resj) {
          console.log("Loan Import Failed");
        } 
        return resj;
      })
      .catch(this.handleError);
  }

  importDepositAccounts(): Promise<number>{
    let params = this.getParamsWithOwner();
    const options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.depositImports.url), options)
      .toPromise()
      .then(resj => {
        if (!resj) {
          console.log("Deposit Import Failed");
        } 
        return resj;
      })
      .catch(this.handleError);
  }

  completeAgentInfo(agent: Agent): Promise<Agent> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.users.userCd, agent.account);
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.users.url), options)
      .toPromise()
      .then(resj => {
        if (!resj) {
          console.log("No user detail found");
        } else {
          BackendModelConversorService.completeAgentFromUser(agent, resj[0]);
        }
        return agent;
      })
      .catch(this.handleError);
  }

  getAgents(): Promise<Agent[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.users.url), options)
      .toPromise()
      .then(resj => {
        if (!resj || resj.length == 0) {
          console.log("No user details found");
        } else {
          return BackendModelConversorService.completeAgentsFromUsers(resj);
        }
        return [];
      })
      .catch(this.handleError);

  }

  getAgentCampaigns(userCode: string): Promise<Campaign[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.userCampaigns.userCd, userCode);
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.userCampaigns.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.agentCampaigns2Campaigns(resj);
      })
      .catch(this.handleError);
  }

  getRoles(): Promise<Role[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.roles.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.roles2Roles(resj);
      })
      .catch(this.handleError);
  }

  getCampaignCallRecordReasons(): Promise<CancelCampaignCallRecordReason[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.cancelReasons.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.cancelCampaignCallRecordReasonFromArray(resj);
      })
      .catch(this.handleError);
  }


  //tickler processes
  getCustomerConsent(cifId: string): Promise<CustomerConsent[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.customerConsent.cifId, cifId);
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.customerConsent.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.customerConsents(resj);
      })
      .catch(this.handleError);
  }

  //lov types
  getLovTypes(): Promise<LovType[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.lovTypes.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.lovTypes(resj);
      })
      .catch(this.handleError);
  }


  getLovValues(lovCd: string): Promise<LovValue[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.lovValues.lovCd, lovCd);

    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.lovValues.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.lovValues(resj);
      })
      .catch(this.handleError);
  }


  //tickler processes
  getProcesses(): Promise<TicklerProcess[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.ticklerProcesses.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.ticklerProcesses(resj);
      })
      .catch(this.handleError);
  }


  //tickler types
  getTicklerTypes(processId: number): Promise<TicklerType[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.ticklerTypes.processId, processId ? processId.toString() : null);

    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.ticklerTypes.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.ticklerTypes(resj);
      })
      .catch(this.handleError);
  }


  getTicklerAttributesMap(ticklerTypeId: number): Promise<TicklerAttributeMap[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.ticklerAttributeMap.ticklerTypeId, ticklerTypeId.toString());
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.ticklerAttributeMap.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.ticklerAttributeMap(resj);
      })
      .catch(this.handleError);
  }


  //code

  //process case
  getProcessCases(id: number, accountId: string, cifId: string, processCode: string, statusCode: string, assignedUser: string, followUpDueCode?: string, orderBy?: boolean, pageNumber?: number, pageSize?: number): Promise<ProcessCase[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    if (id != null) {
      params = BackendCommsService.setNotEmptyParam(params, urls.processCase.id, id.toString());
    }
    params = BackendCommsService.setNotEmptyParam(params, urls.processCase.accountId, accountId);
    params = BackendCommsService.setNotEmptyParam(params, urls.processCase.cifId, cifId);
    params = BackendCommsService.setNotEmptyParam(params, urls.processCase.processCode, processCode);
    params = BackendCommsService.setNotEmptyParam(params, urls.processCase.statusCode, statusCode);
    params = BackendCommsService.setNotEmptyParam(params, urls.processCase.assignedUser, assignedUser);
    params = BackendCommsService.setNotEmptyParam(params, urls.processCase.followUpDueCode, followUpDueCode);
    params = BackendCommsService.setNotEmptyParam(params, urls.processCase.orderBy, this._booleanToStringOrderPipe2.transform(orderBy));
    if (pageNumber != null || pageSize != null) {
      params = BackendCommsService.setNotEmptyParam(params, urls.processCase.pageNr, pageNumber.toString());
      params = BackendCommsService.setNotEmptyParam(params, urls.processCase.pageSize, pageSize.toString());
    }

    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.processCase.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.processCase(resj);
      })
      .catch(this.handleError);
  }

  //process case
  getCaseById(id: number): Promise<ProcessCase> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    if (id != null) {
      params = BackendCommsService.setNotEmptyParam(params, urls.processCase.id, id.toString());
    }
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.processCase.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj) {
          return [];
        }
        return BackendModelConversorService.processCase(resj);
      })
      .catch(this.handleError);
  }


  //process case tickler
  getProcessCaseTicklers(caseId: number, pageNumber?: number, pageSize?: number, isCore?: boolean): Promise<ProcessCaseTickler[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();

    if (caseId != null) {
      params = params.set(urls.processCaseTickler.caseId, caseId.toString());
    }

    if (pageNumber != null && pageSize != null) {
      params = BackendCommsService.setNotEmptyParam(params, urls.processCaseTickler.pageNr, pageNumber.toString());
      params = BackendCommsService.setNotEmptyParam(params, urls.processCaseTickler.pageSize, pageSize.toString());
    }

    if (isCore) {
      params = BackendCommsService.setNotEmptyParam(params, urls.processCaseTickler.isCore, CoreProcessCaseTickler);
    }

    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.processCaseTickler.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.processCaseTickler(resj);
      })
      .catch(this.handleError);
  }

  //tickler map
  getTicklerTypesMap(ticklerFromId: number): Promise<TicklerTypeMap[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    if (ticklerFromId != null) {
      params = params.set(urls.ticklersMap.ticklerFromId, ticklerFromId.toString());
    }

    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.ticklersMap.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.ticklerTypeMap(resj);
      })
      .catch(this.handleError);
  }


  //tickler attribute
  getTicklerAttributes(): Promise<TicklerAttribute[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.ticklerAttribute.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.ticklerAttribute(resj);
      })
      .catch(this.handleError);
  }


  //listOfValues attributes
  getListOfValues(lovCode: string): Promise<Code[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = BackendCommsService.setNotEmptyParam(params, urls.listOfValues.lovCode, lovCode);

    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.listOfValues.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.listOfValue(resj);
      })
      .catch(this.handleError);
  }


  //Campaign list order by types
  //tickler types
  getClOrderByTypes(campaignType: string): Promise<CampaignListOrderByType[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.campaignListOrderByTypes.campaignType, campaignType);
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.campaignListOrderByTypes.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.campaignListOrderByType(resj);
      })
      .catch(this.handleError);
  }


  getCampaigns(): Promise<Campaign[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.campaigns.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.campaigns2Campaigns(resj);
      })
      .catch(this.handleError);
  }

  setCampaignsDefaultValues(campaignCode: string, campaignAttributes: string): Promise<number> {
    let body = {
      CampaignCd: campaignCode,
      AttributeList: campaignAttributes
    };
    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.put(BackendCommsService.getUrl(urls.campaigns.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  getCampaignLists(campaignCode: string, statusCode: string, pageNumber: number, pageSize: number): Promise<CampaignList[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.campaignList.campaignCd, campaignCode);
    params = BackendCommsService.setNotEmptyParam(params, urls.campaignList.statusCd, statusCode);
    params = params.set(urls.campaignList.pageNum, pageNumber.toString());
    params = params.set(urls.campaignList.pageSize, pageSize.toString());
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.campaignList.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.campaignLists2CampaignLists(resj);
      })
      .catch(this.handleError);
  }


  //Get campaign list accounts
  getCampaignListAccounts(campaignCode: string, customerName: string, accountId: string, cifId: string, statusCd: string, currPage: number, pageSize: number): Promise<CampaignListAccount[]> {
    //cache IE
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.campaignListAccount.campaignCd, campaignCode);
    params = BackendCommsService.setNotEmptyParam(params, urls.campaignListAccount.customerName, customerName);
    params = BackendCommsService.setNotEmptyParam(params, urls.campaignListAccount.accountId, accountId);
    params = BackendCommsService.setNotEmptyParam(params, urls.campaignListAccount.cifId, cifId);
    params = BackendCommsService.setNotEmptyParam(params, urls.campaignListAccount.statusCd, statusCd);
    params = params.set(urls.campaignListAccount.pageNr, currPage.toString());
    params = params.set(urls.campaignListAccount.pageSize, pageSize.toString());
    //options
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.campaignListAccount.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.claccounts2CampaigListAccounts(resj);

      })
      .catch(this.handleError);
  }


  //calls pers hour
  getCallsPersHour(campaignCode: string, startDate: Date): Promise<CallsPersHour[]> {
    let params = this.getParamsWithIETimestamp();
    params = BackendCommsService.setNotEmptyParam(params, urls.callsPersHour.campaignCd, campaignCode);
    params = params.set(urls.callsPersHour.startDt, this._datePipe.transform(startDate, DatePatern));

    //options
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.callsPersHour.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.callsPersHour(resj);
      })
      .catch(this.handleError);
  }


  //Incoming calls

  getIncomingCalls(startDate: Date): Promise<IncomingCalls[]> {
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.incomingCalls.startDt, this._datePipe.transform(startDate, DatePatern));

    //options
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.incomingCalls.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        console.log("Incomings calls", resj);
        return BackendModelConversorService.incomingCalls(resj);
      })
      .catch(this.handleError);
  }


  //contact percentage
  getContactPercentage(campaignCode: string, startDate: Date): Promise<ContactPercentage[]> {
    let params = this.getParamsWithIETimestamp();
    params =  BackendCommsService.setNotEmptyParam(params, urls.contactPercentage.campaignCd, campaignCode);
    params = params.set(urls.contactPercentage.startDt, this._datePipe.transform(startDate, DatePatern));

    //options
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.contactPercentage.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        console.log("contact percentage valor", resj);
        return BackendModelConversorService.contactPercentage(resj);
      })
      .catch(this.handleError);
  }


  //campaign record history
  getCampaignRecordHistory(accountId: string, camp: CampaignListRecord): Promise<CampaignRecordHistory[]> {
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.campaignRecordHistory.accountId, accountId);

    //options
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.campaignRecordHistory.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        console.log("campaign record history valor", resj);
        return BackendModelConversorService.campaignRecordHistory(resj, camp);
      })
      .catch(this.handleError);
  }


  getCampaignListStatistics(campaignListId: number, cpl: CampaignList): Promise<CampaignStatsToken[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.campaignListStat.campaingListId, campaignListId.toString());
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.campaignListStat.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.campaignListsStats2CampaignStatisticsToken(resj, cpl);
      })
      .catch(this.handleError);
  }

  getCampaignListRecords(listId: number, statusCode: string, pageNumber: number, pageSize: number): Promise<CampaignListRecord[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.campaignListRecord.listId, listId.toString());
    params = BackendCommsService.setNotEmptyParam(params, urls.campaignListRecord.statusCd, statusCode);
    params = params.set(urls.campaignListRecord.pageNum, pageNumber.toString());
    params = params.set(urls.campaignListRecord.pageSize, pageSize.toString());
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.campaignListRecord.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          return [];
        }
        return BackendModelConversorService.campaignListRecords2CampaignListRecords(resj);
      })
      .catch(this.handleError);
  }


  nextAccount(agent: string, campaign: string): Promise<Account> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.nextAccount.userCd, agent);
    params = params.set(urls.nextAccount.campaignCd, campaign);
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.nextAccount.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj) {
          console.log("No account found");
          return new Promise<Account>((resolve) => resolve(null));
        }
        return BackendModelConversorService.nextAccount2Account(resj);
      })
      .catch(this.handleError);
  }

  accountInquiry(accId: string, accType: string, srcAcc?: Account): Promise<Account> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.acctInq.accId, accId);
    params = params.set(urls.acctInq.accType, accType);
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };

    // Get the data
    return this._http.get<any>(BackendCommsService.getUrl(urls.acctInq.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj.cnAccount && !resj.cnAccountDep) {
          console.log("No account found");
          return null;
        }

        if (resj.cnAccountDep) {
          return BackendModelConversorService.cnAccountDepAccount(resj.cnAccountDep, srcAcc);

        }
        else if (resj.cnAccount) {
          return BackendModelConversorService.cnAccount2Account(resj.cnAccount, srcAcc);
        }
        else{
          return BackendModelConversorService.cnAccount2Account(resj.cnAccount, srcAcc);
        }

      })
      .catch(this.handleError);
  }

  customerInquiry(custId: string, srcCst?: Customer): Promise<Customer> {
    console.log(custId);
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.custInq.customerId, custId);
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.custInq.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj.cnCustomer || !resj.cnCustomer.cnCustomerInfo) {
          console.log("No customer found");
          return null;
        }
        return BackendModelConversorService.cnCustomerInfo2Customer(resj.cnCustomer.cnCustomerInfo, srcCst);
      })
      .catch(this.handleError);
  }

  getCustomerAccounts(custId: string, accountType: string): Promise<Account[]> {
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.acctSrch.customerId, custId);
    params = BackendCommsService.setNotEmptyParam(params, urls.acctSrch.accountType, accountType);
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.acctSrch.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj.cnAccountSrch || !resj.cnAccountSrch.accountList) {
          console.log("No accounts found");
          return new Promise<Account[]>((resolve) => resolve([]));
        }
        return BackendModelConversorService.accountList2Accounts(resj.cnAccountSrch.accountList);
      })
      .catch(this.handleError);
  }

  // Task 5986: this method is obsolete
  getCustomerContacts(custId: string, startDate: Date): Promise<number> {
    //url
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.todayContact.customerId, custId);
    params = params.set(urls.todayContact.startDt, this._datePipe.transform(startDate, DatePatern));

    //options
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.todayContact.url), options)
      .toPromise()
      .then(resj => {
        try {
          let ret = parseInt(resj.toString());
          return isNaN(ret) ? 0 : ret;
        } catch (e) {
          return 0;
        }
      })
      .catch(this.handleError);
  }

  getAccountCalls(accId: string, startDate: Date): Promise<number> {
    //url
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.accountContacts.customerId, accId);
    params = params.set(urls.accountContacts.startDt, this._datePipe.transform(startDate, DatePatern));

    //options
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.accountContacts.url), options)
      .toPromise()
      .then(resj => {
        try {
          let ret = parseInt(resj.toString());
          return isNaN(ret) ? 0 : ret;
        } catch (e) {
          return 0;
        }
      })
      .catch(this.handleError);
  }

  getAccountHistory(accId: string, accountType: string): Promise<AccountHistoryEntry[]> {
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.acctHistSrch.accountId, accId);
    params = params.set(urls.acctHistSrch.accountType, accountType);
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.acctHistSrch.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj.cnAccountHistSrch || !resj.cnAccountHistSrch.accountHistList) {
          console.log("No history found");
          return new Promise<AccountHistoryEntry[]>((resolve) => resolve([]));
        }
        return BackendModelConversorService.cnAccountHistList2AccountHistoryEntries(resj.cnAccountHistSrch.accountHistList);
      })
      .catch(this.handleError);
  }

  getCustomerNotes(custId: string, accountId: string, accountType: string): Promise<CustomerNote[]> {
    return this.getCustomerNotesByType(custId, accountId, accountType, urls.custNotes.collectionFilter);
  }

  getCustomerAlerts(custId: string, accountId: string, accountType: string): Promise<CustomerNote[]> {
    return this.getCustomerNotesByType(custId, accountId, accountType, urls.custNotes.alertFilter);
  }

  getCustomerCallRecords(custId: string): Promise<CallRecord[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.callRecords.customerId, custId);
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.callRecords.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          console.log("No records found");
          return new Promise<CallRecord[]>((resolve) => resolve([]));
        }
        return BackendModelConversorService.callRecords2CallRecords(resj);
      })
      .catch(this.handleError);
  }

  getCustomerCallNotes(accountId: string, accountType: string, pageNumber: number, pageSize: number, customerId: string): Promise<MemoNote[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.callNotes.accountId, accountId);
    params = params.set(urls.callNotes.accountType, accountType);
    params = params.set(urls.callNotes.customerId, customerId);
    params = params.set(urls.callNotes.pageNr, pageNumber.toString());
    params = params.set(urls.callNotes.pageSize, pageSize.toString());
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.callNotes.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          console.log("No call notes found");
          return new Promise<MemoNote[]>((resolve) => resolve([]));
        }
        return BackendModelConversorService.callNotes(resj);
      })
      .catch(this.handleError);
  }

  getCampaignStats(): Promise<CampaignStatsToken[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.campaigStat.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          console.log("No stats found");
          return [];
        }
        return BackendModelConversorService.stats2CampaignStatsToken(resj);
      })
      .catch(this.handleError);

  }

  getCollectorsProductivity(from: Date, to: Date): Promise<CollectorProductivityRecord[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    // TODO: format
    params = params.set(urls.collectorsProductivity.startDt, this._datePipe.transform(from, DatePatern));
    params = params.set(urls.overallProductivity.endDt, this._datePipe.transform(to, DatePatern));
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.collectorsProductivity.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          console.log("No collectors productivity records found");
          return [];
        }
        return BackendModelConversorService.collectorProductivityArray2CollectorProductivityRecords(resj);
      })
      .catch(this.handleError);

  }

  getOverallProductivity(from: Date, to: Date): Promise<OverallProductivityRecord[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    // TODO: format
    params = params.set(urls.overallProductivity.startDt, this._datePipe.transform(from, DatePatern));
    params = params.set(urls.overallProductivity.endDt, this._datePipe.transform(to, DatePatern));
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.overallProductivity.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj || resj.length == 0) {
          console.log("No overall productivity records found");
          return [];
        }
        return BackendModelConversorService.overallProductivityArray2OverallProductivityRecords(resj);
      })
      .catch(this.handleError);

  }

  searchCustomer(criteria: SearchAccountCriteriaParams): Promise<Customer[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = BackendCommsService.setNotEmptyParam(params, urls.custSrch.taxId, criteria.taxId);
    params = BackendCommsService.setNotEmptyParam(params, urls.custSrch.accountId, criteria.accountId);
    params = BackendCommsService.setNotEmptyParam(params, urls.custSrch.email, criteria.email);
    params = BackendCommsService.setNotEmptyParam(params, urls.custSrch.phone, criteria.phoneNumber);
    params = BackendCommsService.setNotEmptyParam(params, urls.custSrch.bankruptcy, criteria.bankruptcyNumber);
    if (criteria.accountId) {
      params = BackendCommsService.setNotEmptyParam(params, urls.custSrch.accountType, criteria.accountType);
    }
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.custSrch.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj.cnCustomerSrch || !resj.cnCustomerSrch.customerList) {
          console.log("No customers found");
          return new Promise<Customer[]>((resolve) => resolve([]));
        }
        return BackendModelConversorService.customerList2Customers(resj.cnCustomerSrch.customerList);
      })
      .catch(this.handleError);
  }

  addCallRecord(user, campaignRecordId, accountId, accountType,
                customerId, /*callStartDate,*/ actionCode, contactedCode,
                resultCode, statusCode, callNote, nextWorkDate, promisedDate, pomisedAmount,
                callLaterDate, callLaterUser, callId,
                callStartDate, callEndDate, phoneNumber, phoneType, autoDial, customerFirstName: string,
                customerLastName: string, agent: string, agentGroup: string, campaignCode: string, collectionStatusCode: string,
                lastPromiseDate: string, balance: string, daysPastDue,
                extension: string, languageCode: string, eaPcFlag: string, accountStatusCode: string,
                addrVerifStatus: string, emailVerifStatus: string, phoneVerifStatus: string): Promise<boolean> {
    let body: any = {
      userCd: user,
      campaignRecordId: campaignRecordId,
      accountId: accountId,
      accountType: accountType,
      customerId: customerId,
      actionCd: actionCode,
      contactedCd: contactedCode,
      resultCd: resultCode,
      statusCd: statusCode,
      callNote: callNote,
      nextWorkDt: nextWorkDate,
      promisedDt: promisedDate,
      promisedAmount: pomisedAmount,
      CustomerFirstName: customerFirstName,
      CustomerLastName: customerLastName,
      Agent: agent,
      AgentGroup: agentGroup,
      CampaignCd: campaignCode,
      CollectionStatusCd: collectionStatusCode,
      LastPromiseDt: lastPromiseDate,
      Balance: balance,
      DaysPastDue: daysPastDue,
      Extension: extension,
      LanguageCd: languageCode,
      EaPcFlg: eaPcFlag,
      accountStatusCd: accountStatusCode,
      addrVerifStatus: addrVerifStatus,
      emailVerifStatus: emailVerifStatus,
      phoneVerifStatus: phoneVerifStatus

    };
    if (callId) {
      body.dialogId = callId;
    }
    if (callLaterDate) {
      body.nextCallDt = callLaterDate;
      body.nextCalluserCd = callLaterUser;
    }
    if (callStartDate) {
      body.callStartDt = callStartDate;
    }
    if (callEndDate) {
      body.callEndDt = callEndDate;
    }
    if (phoneNumber) {
      body.phoneNr = phoneNumber;
    }
    if (phoneType) {
      body.phoneType = phoneType;
    }
    if (autoDial) {
      body.autodialFlg = "Y";
    } else {
      body.autodialFlg = "N";
    }

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };

    return this._http.post<any>(BackendCommsService.getUrl(urls.addCallRecord.url), body, options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        return true;
      })
      .catch(this.handleError);
  }

  cancelCallRecord(agentCd: string, campaignRecordId: string, reasonCode: string, message: string, flag: boolean): Promise<boolean> {
    let body: any = {
      UserCd: agentCd,
      CampaignRecordId: campaignRecordId,
      CancelCd: reasonCode,
      CancelDesc: message,
      CancelRelatedFlg: this._booleanToStringPipe.transform(flag)
    };
    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.put(BackendCommsService.getUrl(urls.cancelRecord.url), body, options)
      .toPromise()
      .then(resj => {
        return true;
      })
      .catch(this.handleError);
  }

  createCampaignList(campaignCode: string, userCode: string, uploadId: number, attributes: { code: string, values: any[], isArray: boolean }[]): Promise<number> {
    let body = {
      UserCd: userCode,
      UploadId: uploadId,
      CampaignCd: campaignCode
    };
    for (let a of attributes) {
      body[a.code] = a.isArray ? a.values : a.values[0];
    }
    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post(BackendCommsService.getUrl(urls.campaignList.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return parseInt(resp.toString());
      })
      .catch(this.handleError);
  }

  //create case tickler
  createCaseTickler(accountId: string, cifId: string, processCode: string, caseDescription: string, createdBy: string, custFirstName: string, custLastName: string, accountType: string): Promise<number> {
    let body = {
      AccountId: accountId,
      CifId: cifId,
      ProcessCd: processCode,
      CaseDesc: caseDescription,
      CreatedBy: createdBy,
      FirstName: custFirstName,
      LastName: custLastName,
      AccountType: accountType
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post(BackendCommsService.getUrl(urls.processCase.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  //add case tickler
  addCaseTickler(caseId: number, ticklerTypeCode: string, ticklerDescription: string, followUpDays: number, document: string, attributes, createdBy: string): Promise<number> {
    let body = {
      CaseId: caseId,
      TicklerTypeCd: ticklerTypeCode,
      TicklerDesc: ticklerDescription,
      CreatedBy: createdBy,
      Attributes: JSON.stringify(attributes),
      FollowUpDays: followUpDays,
      Document: document
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post(BackendCommsService.getUrl(urls.processCaseTickler.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  //add case tickler
  addCallNotes(accountId:string, accountType: string, cifId: string, note: string, createdBy: string): Promise<boolean> {
    let body = {
      AccountId: accountId,
      AccountType: accountType,
      CifId: cifId,
      Note: note,
      CreatedBy: createdBy,
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers = options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post<any>(BackendCommsService.getUrl(urls.callNotes.url), body, options)
      .toPromise()
      .then(resp => {
        return true;
      })
      .catch(this.handleError);
  }

  addCustomerConsent(cifId: string, hasConsent: boolean, phoneNumber: string,note: string, createdBy: string): Promise<number> {
    let body = {
      CifId: cifId,
      ConsentFlg: this._booleanToStringPipe.transform(hasConsent),
      PhoneNr: phoneNumber,
      Note: note,
      CreatedBy: createdBy
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post<any>(BackendCommsService.getUrl(urls.customerConsent.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }


  addOrderBy(userCode: string, clId: number, column: string, ascending: boolean): Promise<number> {
    let body = {
      UserCd: userCode,
      CLID: clId,
      Column: column,
      Order: this._booleanToStringOrderPipe.transform(!ascending)
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post<any>(BackendCommsService.getUrl(urls.campaignListOrderBy.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }


  updateCLStatus(id: number, statusCode: string, modifiedBy: string): Promise<number> {
    let body = {
      Id: id,
      StatusCd: statusCode,
      ModifiedBy: modifiedBy
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.put(BackendCommsService.getUrl(urls.campaignList.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }


  //new tickler type
  newTicklerType(processId: number,
                 ticklerCode: string,
                 ticklerName: string,
                 ticklerDescription: string,
                 actionRequired: boolean,
                 activeFlag: boolean,
                 isCloseable: boolean,
                 isCore: boolean,
                 orderByCode: number,
                 followUpDays: number,
                 createdBy: string): Promise<number> {
    let body = {
      ProcessId: processId,
      TicklerCd: ticklerCode,
      TicklerNm: ticklerName,
      TicklerDesc: ticklerDescription,
      ActionRequiredFlg: this._booleanToStringPipe.transform(actionRequired),
      ActiveFlg: this._booleanToStringPipe.transform(activeFlag),
      CloseableFlg: this._booleanToStringPipe.transform(isCloseable),
      CoreFlg: this._booleanToStringPipe.transform(isCore),
      FollowUpDays: followUpDays,
      OrderByCd: orderByCode,
      CreatedBy: createdBy
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post<any>(BackendCommsService.getUrl(urls.ticklerTypes.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }


  //update tickler type
  updateTicklerType(id: number,
                    ticklerName: string,
                    ticklerDescription: string,
                    activeFlag: boolean,
                    actionRequired: boolean,
                    isCloseable: boolean,
                    isCore: boolean,
                    isBase: boolean,
                    orderByCode: number,
                    followUpDays: number,
                    modifiedBy: string): Promise<number> {
    let body = {
      Id: id,
      TicklerNm: ticklerName,
      TicklerDesc: ticklerDescription,
      ActiveFlg: this._booleanToStringPipe.transform(activeFlag),
      ActionRequiredFlg: this._booleanToStringPipe.transform(actionRequired),
      CloseableFlg: this._booleanToStringPipe.transform(isCloseable),
      CoreFlg: this._booleanToStringPipe.transform(isCore),
      BaseFlg: this._booleanToStringPipe.transform(isBase),
      FollowUpDays: followUpDays,
      OrderByCd: orderByCode,
      ModifiedBy: modifiedBy
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.put<any>(BackendCommsService.getUrl(urls.ticklerTypes.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  //Remove tickler type
  removeTicklerType(id: number): Promise<number> {
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.ticklerTypes.id, id.toString());
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    options.headers = options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.delete(BackendCommsService.getUrl(urls.ticklerTypes.url), options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  //add lov type
  addLovType(lovCode: string, lovName: string, lovDescription: string, isActive: boolean, type: string, createdBy: string): Promise<number> {
    let body = {
      LovCd: lovCode,
      LovNm: lovName,
      LovDesc: lovDescription,
      ActiveFlg: this._booleanToStringPipe.transform(isActive),
      DataType: this.setCorrespondentDataType(type),
      CreatedBy: createdBy,
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post<any>(BackendCommsService.getUrl(urls.lovTypes.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  //add lov value
  addLovValue(lovId: number, valueCode: string, valueName: string, valueDescription: string, createdBy: string): Promise<boolean> {
    let body = {
      LovId: lovId,
      ValueCd: valueCode,
      ValueNm: valueName,
      ValueDesc: valueDescription,
      CreatedBy: createdBy,
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post(BackendCommsService.getUrl(urls.lovValues.url), body, options)
      .toPromise()
      .then(resp => {
        return true;
      })
      .catch(this.handleError);
  }


  //new tickler type
  newTicklerAttribute(attributeCode: string, attributeName: string, attributeDescription: string, activeFlag: boolean, arrayFlag: boolean, dataType: string, lovCode: string, createdBy: string): Promise<number> {
    let body = {
      AttributeCd: attributeCode,
      AttributeNm: attributeName,
      AttributeDesc: attributeDescription,
      ActiveFlg: this._booleanToStringPipe.transform(activeFlag),
      ArrayFlg: this._booleanToStringPipe.transform(arrayFlag),
      DataType: this.setCorrespondentDataType(dataType),
      LovCd: lovCode,
      CreatedBy: createdBy,
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post<any>(BackendCommsService.getUrl(urls.ticklerAttribute.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  //update tickler type
  updateTicklerAttribute(id: number, attributeName: string, attributeDescription: string, activeFlag: boolean, arrayFlag: boolean, modifiedBy: string): Promise<number> {
    let body = {
      Id: id,
      AttributeNm: attributeName,
      AttributeDesc: attributeDescription,
      ActiveFlg: this._booleanToStringPipe.transform(activeFlag),
      ArrayFlg: this._booleanToStringPipe.transform(arrayFlag),
      ModifiedBy: modifiedBy
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.put(BackendCommsService.getUrl(urls.ticklerAttribute.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  //set data type
  setCorrespondentDataType(dataType: string) {
    switch (dataType) {
      case "0":
        dataType = "STRING";
        break;
      case "1":
        dataType = "NUMBER";
        break;
      case "2":
        dataType = "DATE";
        break;
      case "3":
        dataType = "DATETIME";
        break;
      case "4":
        dataType = "LOV";
        break;
      default:
        dataType = "UNKNOWN";
    }
    return dataType;
  }

  addTicklerAttributeMap(ticklerTypeId: number, attributeTypeId: number, mandatoryFlag: boolean, createdBy: string): Promise<number> {
    let body = {
      TicklerTypeId: ticklerTypeId,
      AttributeTypeId: attributeTypeId,
      MandatoryFlg: this._booleanToStringPipe.transform(mandatoryFlag),
      CreatedBy: createdBy
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post(BackendCommsService.getUrl(urls.ticklerAttributeMap.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  updateLovType(id: number, lovCode: string, lovName: string, lovDescription: string, isActive: boolean, type: string, modifiedBy: string): Promise<number> {
    let body = {
      Id: id,
      LovCd: lovCode,
      LovNm: lovName,
      LovDesc: lovDescription,
      ActiveFlg: this._booleanToStringPipe.transform(isActive),
      DataType: this.setCorrespondentDataType(type),
      ModifiedBy: modifiedBy
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.put(BackendCommsService.getUrl(urls.lovTypes.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  //update lov value
  updateLovValue(id: number, valueCode: string, valueName: string, valueDescription: string, isActive: boolean, modifiedBy: string): Promise<number> {
    let body = {
      Id: id,
      ValueCd: valueCode,
      ValueNm: valueName,
      ValueDesc: valueDescription,
      ActiveFlg: this._booleanToStringPipe.transform(isActive),
      ModifiedBy: modifiedBy
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.put(BackendCommsService.getUrl(urls.lovValues.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  updateTicklerAttributeMap(id: number, mandatoryFlag: boolean, modifiedBy: string): Promise<number> {
    let body = {
      Id: id,
      MandatoryFlg: this._booleanToStringPipe.transform(mandatoryFlag),
      ModifiedBy: modifiedBy
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.put(BackendCommsService.getUrl(urls.ticklerAttributeMap.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }


  //add tickler type map
  addTicklerTypeMap(ticklerFromId: number, ticklerToId: number, createdBy: string): Promise<number> {
    let body = {
      TicklerFromId: ticklerFromId,
      TicklerToId: ticklerToId,
      CreatedBy: createdBy
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post(BackendCommsService.getUrl(urls.ticklersMap.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  //delete lov type
  deleteLovType(id: number, deletedBy): Promise<number> {
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.lovTypes.id, id.toString());
    params = params.set(urls.lovValues.deletedBy, deletedBy);
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.delete(BackendCommsService.getUrl(urls.lovTypes.url), options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }


  //delete lov type
  deleteLovValue(id: number, deletedBy: string): Promise<number> {
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.lovValues.id, id.toString());
    params = params.set(urls.lovValues.deletedBy, deletedBy);
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.delete(BackendCommsService.getUrl(urls.lovValues.url), options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }


  //Remove tickler type
  deleteTicklerAttributeMap(id: number): Promise<number> {

    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.ticklerAttributeMap.id, id.toString());
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.delete(BackendCommsService.getUrl(urls.ticklerAttributeMap.url), options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  //Delete case ticklergg
  deleteCaseTickler(id: number, agent: string): Promise<boolean> {

    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.processCaseTickler.id, id.toString());
    params = params.set(urls.processCaseTickler.DeletedBy, agent);
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    options.headers = options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.delete<any>(BackendCommsService.getUrl(urls.processCaseTickler.url), options)
      .toPromise()
      .then(resp => {
        return true;
      })
      .catch(this.handleError);
  }

  //Remove tickler type
  deleteTicklerTypeMap(id: number): Promise<number> {
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.ticklersMap.id, id.toString());
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.delete(BackendCommsService.getUrl(urls.ticklersMap.url), options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }


  launchCampaignList(campaignListId: number, userCode: string): Promise<boolean> {
    let body = {
      UserCd: userCode,
      campaignListId: campaignListId
    };
    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post(BackendCommsService.getUrl(urls.campaignListLaunch.url), body, options)
      .toPromise()
      .then(() => {
        return true;
      })
      .catch(this.handleError);
  }

  assignAgentToCampaign(user: string, campaign: string, assign: boolean, requester: string): Promise<boolean> {
    let body = {
      userCd: user,
      campaignCd: campaign,
      activeFlg: assign ? "Y" : "N",
      createdBy: requester
    };
    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };

    return this._http.post(BackendCommsService.getUrl(urls.userCampaigns.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return new Promise<boolean>((resolve) => resolve(true));
      })
      .catch(this.handleError);
  }

  assignAgentToRole(user: string, roleCode: string, assign: boolean, requester: string): Promise<boolean> {
    let body = {
      UserCd: user,
      RoleCd: roleCode,
      ActiveFlg: assign ? "Y" : "N",
      CreatedBy: requester
    };
    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };

    return this._http.post(BackendCommsService.getUrl(urls.userRoles.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return new Promise<boolean>((resolve) => resolve(true));
      })
      .catch(this.handleError);
  }

  addAddressVerification(cifId: string, streetAddr1: string, streetAddr2: string, streetAddr3: string, city: string, stateCode: string, postalCode: string,
                         newStreetAddr1: string, newStreetAddr2: string, newStreetAddr3: string, newCity: string, newStateCode: string, newPostalCode: string,
                         note: string, statusFlg: VerificationStatus, createdBy: string): Promise<number> {
    let body = {
      CifId: cifId,
      StreetAddr1: streetAddr1,
      StreetAddr2: streetAddr2,
      StreetAddr3: streetAddr3,
      City: city,
      StateCode: stateCode,
      PostalCode: postalCode,
      NewStreetAddr1: newStreetAddr1,
      NewStreetAddr2: newStreetAddr2,
      NewStreetAddr3: newStreetAddr3,
      NewCity: newCity,
      NewStateCode: newStateCode,
      NewPostalCode: newPostalCode,
      Note: note,
      StatusFlg: statusFlg,
      CreatedBy: createdBy
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post(BackendCommsService.getUrl(urls.addressVerification.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  addEmailVerification(cifId: string, email: string[], newEmail: string[], note: string, statusFlg: VerificationStatus, createdBy: string): Promise<number> {
    let body = {
      CifId: cifId,
      Email: email,
      NewEmail: newEmail,
      Note: note,
      StatusFlg: statusFlg,
      CreatedBy: createdBy
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post(BackendCommsService.getUrl(urls.emailVerification.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  addPhoneVerification(cifId: string, phone: Object[], newPhone: Object[], note: string, statusFlg: string, createdBy: string): Promise<number> {
    let body = {
      CifId: cifId,
      Phone: phone,
      NewPhone: newPhone,
      Note: note,
      StatusFlg: statusFlg,
      CreatedBy: createdBy
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post(BackendCommsService.getUrl(urls.phoneVerification.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  bpm_getCases(accountId: string, accountType: string): Promise<BPMCase[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set("AccountId", accountId);
    params = params.set("AccountType", accountType);
    params = params.set("PageNr", "0");
    params = params.set("PageSize", "20");
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.accountProcesses.url), options)
      .toPromise()
      .then(resj => {
        if (!resj || resj.length === 0) {
          console.log("No cases found");
          return [];
        }

        return BackendModelConversorService.bpmCases(resj);
      })
      .catch(this.handleError);
  }

  bpm_getProcessTypes(): Promise<BPMProcessType[]> {
    let options = {
      params: this.getParamsWithIETimestamp(),
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.processTypes.url), options)
      .toPromise()
      .then(resp => {
        if (!resp) {
          console.log("No process types found");
          return [];
        }
        return BackendModelConversorService.bpmProcessTypes(resp);
      })
      .catch(this.handleError);
  }

  bpm_createCase(accountId: string, accountType: string, cif: string, processInstanceId: number, containerId: string,
                 processId: string, processName: string, processVersion: string, note: string, createdBy: string): Promise<any> {
    let body = {
      AccountId: accountId,
      AccountType: accountType,
      CifId: cif,
      ProcessInstanceId: processInstanceId,
      ContainerId: containerId,
      ProcessId: processId,
      ProcessName: processName,
      ProcessVersion: processVersion,
      Note: note,
      CreatedBy: createdBy
    };
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.post(BackendCommsService.getUrl(urls.accountProcesses.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  getTasksRelatedAccount(ids: number[]): Promise<Account[]>{
    // Set query params
    let params = this.getParamsWithIETimestamp();
    for (let i in ids) {
      params = params.append(urls.accountProcessesDetails.processInstanceId, ids[i].toString());
    }
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.accountProcessesDetails.url), options)
      .toPromise()
      .then(resj => {
        if (!resj || resj.length === 0) {
          console.log("No accounts found");
          return null;
        }

        return BackendModelConversorService.processAccountList2Accounts(resj);
      })
      .catch(this.handleError);
  }

  sendAbortProcessNote(instanceId: number, note: string): Promise<number> {
    let body = {
      processInstanceId: instanceId,
      AbortNote: note
    };
    let params = this.getParamsWithIETimestamp();
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.post<number>(BackendCommsService.getUrl(urls.accountProcesses.urlAbort), body, options)
      .toPromise()
      .then(val => {
        return val;
      })
      .catch(this.handleError);
  }

  //update note message
  updateCustomerMessage(accountId: string, accountType: string, msgType: string, msgSeq: string, customerId: string, message: string): Promise<number> {
    let body = {
      AccountId: accountId,
      AccountType: accountType,
      MsgType: msgType,
      MsgSeq: msgSeq,
      CustomerId: customerId,
      Message: message
    };

    console.log(body);
    let options = {
      headers: this.getHeaderWithAuth()
    };
    options.headers.set(urls.general.headers.content.key, urls.general.headers.content.value);

    return this._http.put(BackendCommsService.getUrl(urls.custMsg.url), body, options)
      .toPromise()
      .then(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }

  private static setNotEmptyParam(params: HttpParams, key: string, value: string): HttpParams {
    if (value && value.trim() != "") {
      return params.set(key, value.trim());
    }
    return params;
  }

  private getCustomerNotesByType(custId: string, accountId: string, accountType: string, type: string): Promise<CustomerNote[]> {
    // Set query params
    let params = this.getParamsWithIETimestamp();
    params = params.set(urls.custNotes.customerId, custId);
    params = params.set(urls.custNotes.accId, accountId);
    params = params.set(urls.custNotes.accType, accountType);
    params = params.set(urls.custNotes.msgType, type);
    let options = {
      params: params,
      headers: this.getHeaderWithAuth()
    };
    return this._http.get<any>(BackendCommsService.getUrl(urls.custNotes.url), options)
      .toPromise()
      .then(resj => {
        console.log(resj);
        if (!resj.cnCustomerMsgSrch || !resj.cnCustomerMsgSrch.customerMsgList) {
          console.log("No notes found");
          return new Promise<CustomerNote[]>((resolve) => resolve([]));
        }
        return BackendModelConversorService.customerMsgList2Notes(resj.cnCustomerMsgSrch.customerMsgList);
      })
      .catch(this.handleError);
  }

  private static getUrl(url: string) {
    return `${environment.serviceUrl}${urls.general.prefix}${url}${urls.general.version}`;
  }

  private static getSimpleUrl(url: string) {
    return `${environment.serviceUrl}/${url}`;
  }

  private getHeaderWithAuth(): HttpHeaders {
    return new HttpHeaders().set(urls.general.authKey, this._sessionToken);
  }

  private getParamsWithIETimestamp(): HttpParams {
    let params = new HttpParams();
    return params.set(urls.general.tsIEKey, new Date().getTime().toString());
  }

  private getParamsWithOwner(): HttpParams {
    let params = new HttpParams();
    return params.set(urls.user, "raguidry");
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in httpbackend');
    console.error(error);
    if (error.status == 401) {
      ufs.handleNotification(new UFNotification(0, "Session expired", UFSeverity.warn, error));
      gss.logout();
    }

    throw error;
  }
}

