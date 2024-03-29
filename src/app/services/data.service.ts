import {Account} from "../models/account";
import {Agent, AgentState} from "../models/agent";

import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {BackendCommsService} from "./backend-comms.service";

import {UFNotification, UserFeedbackService} from "./user-feedback.service";
import {UFSeverity} from "./ufseverity";
import {Customer} from "../models/customer";
import {SearchAccountCriteriaParams} from "../models/search-account-criteria-params";
import {CiscoCommsService} from "./cisco-comms.service";
import {DatePipe} from "@angular/common";
import {LineType, Phone, PhoneType} from "../models/phone";
import {Call, CallState, CallType} from "app/models/call";
import {Campaign, inProgressStatus, pausedStatus} from "../models/campaign";
import {CallRecord} from "../models/call-record";
import {CampaignStatsToken} from "../models/campaign-stats-token";
import {CancelRecordModel, NewCallRecordModel} from "../models/new-call-record-model";
import {CollectorProductivityRecord} from "../models/collector-productivity-record";
import {Pagination} from "../models/pagination";
import {CampaignList} from "../models/campaign-list";
import {CampaignListRecord} from "../models/campaign-list-record";
import {OverallProductivityRecord} from "../models/overall-productivity-record";
import {CampaignListCodeNew, Code} from "../models/code";
import {Role} from "../models/role";
import {CampaignListAccount} from "../models/campign-list-accounts";
import {SearchCampaignCriteriaParams} from "../models/search-campaign-criteria-params";
import {CallsPersHour} from "../models/callsPersHour";
import {SearchCallsPerHourCriteriaParams} from "../models/search-calls-per-hour-criteria-params";
import {SearchCallsIncomingCallsCriteriaParams} from "../models/search-incoming-calls-criteria-params";
import {IncomingCalls} from "../models/incomingCalls";
import {SearchContactPercentageCriteriaParams} from "../models/search-contact-percentage-criteria-params";
import {ContactPercentage} from "../models/contact-percentage";
import {CancelCampaignCallRecordReason} from "../models/cancel-campaign-call-record-reason";
import {CampaignRecordHistory} from "../models/campaign-record-history";
import {TicklerProcess} from "../models/tickler-processes";
import {TicklerType} from "../models/tickler-types";
import {ProcessCase} from "../models/process-case";
import {ProcessCaseTickler} from "../models/process-case-tickler";
import {ProcessCaseModel} from "../models/process-case-model";
import {SearchTicklerCaseParams} from "../models/search-tickler-case-params";
import {TicklerTypeModel} from "../models/tickler-type-model";
import {TicklerTypeMap} from "../models/tickler-type-map";
import {TicklerAttribute} from "../models/tickler-attribute";
import {TicklerAttributeModel} from "../models/tickler-attribute-model";
import {TicklerAttributeMap} from "../models/tickler-attribute-map";
import {AttributeType} from "../models/attribute";
import {CustomerConsent} from "../models/customer-consent";
import {SortOrder} from "../models/sort-order";
import {CampaignListOrderByType} from "../models/cl-order-by-type";
import {LovType} from "../models/lov-types";
import {LovValue} from "../models/lov-values";
import {LovTypeModel} from "../models/lov-type-model";
import {MemoNote} from "../models/memo-note";
import {AddressVerification} from "../models/addressVerification";
import {EmailListVerification} from "../models/emailListVerification";
import {PhoneListVerification} from "../models/phoneListVerification";
import {PamCommsService} from "./pam-comms.service";
import {BPMCase, BPMProcessInstance, BPMProcessType, BPMTask, BPMVariable, processStates} from "../models/bpm-case";
import {SearchTaskInboxParams} from "../models/search-task-inbox-params";
import {SearchProcessesListParams} from "../models/search-processes-list-params";
import {FemaCommsService} from "./fema-comms.service";
import {CustomerNote} from "../models/customer-note";
import {VerifStatus} from "../views/manage-account/manage-account.component";

export enum DSErrorCodes {
  no_account = 0,
  no_customer = 1,
  no_additional_accounts = 2,
  no_notes = 3,
  no_call_records = 4,
  no_account_history = 5,
  no_ssn = 6,
  no_alerts = 7,
  no_previous_contacts = 8,
  no_call_notes = 9,
  no_coborrower_info = 10
}

const DatePatern = 'yyyy-MM-dd';

@Injectable()
export class DataService {

  constructor(private _backCommsService: BackendCommsService,
              private _ciscoCommsService: CiscoCommsService,
              private _userFeedbackService: UserFeedbackService,
              private _pamCommsService: PamCommsService,
              private _femaCommsService: FemaCommsService,
              private _datePipe: DatePipe) {
  }

  login(login: string, pwd: string): Promise<Agent> {
    // let ret = new Promise<Agent>();
    return this._backCommsService.login(login, pwd).then(agent =>
      this._backCommsService.completeAgentInfo(agent)
    );
  }

  getAgents(): Promise<Agent[]> {
    return this._backCommsService.getAgents();
  }

  getNextAccount(agent: Agent, campaignCode: string): Promise<Account> {
    return this._backCommsService.nextAccount(agent.account, campaignCode);
  }

  getAgentCampaigns(agent: Agent): Promise<Campaign[]> {
    return this._backCommsService.getAgentCampaigns(agent.account);
  }

  getCustomerAccounts(customer: Customer, accountType: string): Promise<Account[]> {
    return this._backCommsService.getCustomerAccounts(customer.id, accountType);
  }

  getCustomerConsents(customer: Customer): Promise<CustomerConsent[]>{
    return this._backCommsService.getCustomerConsent(customer.id);
  }

  //co-borrowers
  getInfoCustomer(customer: Customer): Promise<Customer>{
    return this._backCommsService.customerInquiry(customer.id, customer);
  }

  //get customer from account
  getCustomerFromAccount(accountId: string, accountType: string, errorStream?: Subject<UFNotification>): Observable<Customer>{
    let ret = new Subject<Customer>();
    // Get the complete account
    this._backCommsService
      .accountInquiry(accountId, accountType)
      .then(acc => {
        // The account does not have accountId and accountType
        acc.accountId = accountId;
        acc.accountType = accountType;
        // acc.campaignRecordId = campaignRecordId;
        ret.next(acc.customer);

        // Get customer's additional info
        this._backCommsService
          .customerInquiry(acc.customer.id, acc.customer)
          .then(cust => {
            // Put the customer in the account
            // acc.customer = cust;
            ret.next(acc.customer);
            // Per avisar als suscriptors:
          })
          .catch(error =>
            this.handleError(
              DSErrorCodes.no_customer,
              "Error getting the customer",
              UFSeverity.warn,
              error,
              errorStream)
          );
      }).catch(error =>
      this.handleError(
        DSErrorCodes.no_account,
        "Error getting the account",
        UFSeverity.warn,
        error,
        errorStream)

    );
    return ret;
  }

  getCallNotes(acc: Account, customer?: Customer): Promise<MemoNote[]>{
   return this._backCommsService.getCustomerCallNotes(acc.accountId, acc.accountType, 0,20, customer.id);
  }

  getCompleteInfoForAccount(accountId: string, accountType: string, campaignRecordId: string, errorStream?: Subject<UFNotification>, mustToBeLoaded?:boolean): Observable<Account> {
    let ret = new Subject<Account>();
    // Get the complete account
    this._backCommsService
      .accountInquiry(accountId, accountType)
      .then(acc => {
        // The account does not have accountId and accountType
        acc.accountId = accountId;
        acc.accountType = accountType;
        acc.campaignRecordId = campaignRecordId;
        ret.next(acc);

        // Get customer's additional info
        this._backCommsService
          .customerInquiry(acc.customer.id, acc.customer)
          .then(cust => {
            // Put the customer in the account
            // acc.customer = cust;
            ret.next(acc);
            // Get additional accounts
            this._backCommsService.getCustomerAccounts(acc.customer.id, acc.accountType)
              .then(accs => {
                for (let a of accs) {
                  acc.customer.addAccount(a);
                }
                ret.next(acc);
              })
              .catch(error => {
                this.handleError(
                  DSErrorCodes.no_additional_accounts,
                  "Error getting additional accounts",
                  UFSeverity.warn,
                  error,
                  errorStream)
              });

            if (mustToBeLoaded) {
              // Set a delay to let the browser react (IE)
              setTimeout(() => {
                // Get SSN number and coborrowers from customer search by accountId
                let crit = new SearchAccountCriteriaParams();
                crit.accountId = accountId;
                crit.accountType = accountType;
                this._backCommsService.searchCustomer(crit).then(custs => {
                  acc.customer.resetCoBorrowers();
                  // Extract the ssn from the right customer or add to coborrowers
                  let custsLength = custs.length - 1;
                  let coBorrowersCount = 0;
                  for (let customer of custs) {
                    if (acc.customer.id == customer.id) {
                      // TaxId and socialSecurityNumber is the same!!
                      acc.customer.socialSecurityNumber = customer.taxId;
                    } else {
                      this.getInfoCustomer(customer).then(completeCustomer => {
                        acc.customer.addCoBorrower(completeCustomer);
                        coBorrowersCount ++;
                        if (coBorrowersCount === custsLength) {
                          ret.next(acc);
                        }
                      }).catch(error =>
                        this.handleError(
                          DSErrorCodes.no_coborrower_info,
                          "Error getting additional co-borrower info",
                          UFSeverity.warn,
                          error,
                          errorStream)
                      );
                    }
                  }
                }).catch(error =>
                  this.handleError(
                    DSErrorCodes.no_ssn,
                    "Error getting customer SSN",
                    UFSeverity.warn,
                    error,
                    errorStream)
                );
              }, 10);

              // Set a delay to let the browser react (IE)
              setTimeout(() => {
                // This call could be launched once we have the account,
                // but has been migrated once we have the customer info because it's not important
                // Get Account history
                this._backCommsService
                  .getAccountHistory(accountId, accountType)
                  .then(accHist => {
                    acc.resetHistory();
                    for (let ahe of accHist) {
                      acc.addHistoryEntry(ahe);
                    }
                    ret.next(acc);
                  })
                  .catch(err => {
                    this.handleError(
                      DSErrorCodes.no_account_history,
                      "Error getting account history",
                      UFSeverity.warn,
                      err,
                      errorStream)
                  });

                // Get notes
                this._backCommsService.getCustomerNotes(acc.customer.id, acc.accountId, acc.accountType)
                  .then(notes => {
                    acc.customer.resetNotes();
                    for (let note of notes) {
                      acc.customer.addNote(note);
                    }
                    ret.next(acc);
                  })
                  .catch(error =>
                    this.handleError(
                      DSErrorCodes.no_notes,
                      "Error getting notes",
                      UFSeverity.warn,
                      error,
                      errorStream)
                  );

                // Get alerts
                this._backCommsService.getCustomerAlerts(acc.customer.id, acc.accountId, acc.accountType)
                  .then(notes => {
                    acc.customer.resetAlerts();
                    for (let note of notes) {
                      acc.customer.addAlert(note);
                    }
                    ret.next(acc);
                  })
                  .catch(error =>
                    this.handleError(
                      DSErrorCodes.no_alerts,
                      "Error getting notes",
                      UFSeverity.warn,
                      error,
                      errorStream)
                  );

                // Get call notes
                this._backCommsService.getCustomerCallNotes(acc.accountId, acc.accountType,0, 20, acc.customer.id)
                  .then(callNotes => {
                    acc.customer.resetCallNotes();
                    for (let call of callNotes) {
                      acc.customer.addCallNote(call);
                    }
                    ret.next(acc);
                  })
                  .catch(error =>
                    this.handleError(
                      DSErrorCodes.no_call_notes,
                      "Error getting call notes",
                      UFSeverity.warn,
                      error,
                      errorStream)
                  );

                // Get call records
                this._backCommsService.getCustomerCallRecords(acc.customer.id)
                  .then(callRec => {
                    acc.customer.resetCalls();
                    for (let call of callRec) {
                      acc.customer.addCallRecord(call);
                    }
                    ret.next(acc);
                  })
                  .catch(error =>
                    this.handleError(
                      DSErrorCodes.no_call_records,
                      "Error getting call records",
                      UFSeverity.warn,
                      error,
                      errorStream)
                  );

                // TASK 5986: Change of call
                // Get account # contacts
                // this._backCommsService.getCustomerContacts(cust.id, new Date()).then( res => {
                this._backCommsService.getAccountCalls(accountId, new Date()).then( res => {
                  acc.customer.todayContacts = res;
                  ret.next(acc);
                }).catch(error =>
                  this.handleError(
                    DSErrorCodes.no_previous_contacts,
                    "Error getting previous contact #",
                    UFSeverity.warn,
                    error,
                    errorStream)
                );
              }, 50);
            }
            else {
              setTimeout(() => {
                // Get call records
                this.loadCalls(acc, ret, errorStream);
              }, 50);
            }

            ret.next(acc);
          })
          .catch(error =>
            this.handleError(
              DSErrorCodes.no_customer,
              "Error getting the customer",
              UFSeverity.warn,
              error,
              errorStream)
          );
      }).catch(error =>
      this.handleError(
        DSErrorCodes.no_account,
        "Error getting the account",
        UFSeverity.warn,
        error,
        errorStream)
    );
    return ret;
  }

  private loadCalls(acc: Account, ret: Subject<Account>, errorStream: Subject<UFNotification>) {
    // Get call records
    this._backCommsService.getCustomerCallRecords(acc.customer.id)
      .then(callRec => {
        acc.customer.resetCalls();
        for (let call of callRec) {
          acc.customer.addCallRecord(call);
        }
        ret.next(acc);
      })
      .catch(error =>
        this.handleError(
          DSErrorCodes.no_call_records,
          "Error getting call records",
          UFSeverity.warn,
          error,
          errorStream)
      );
  }

  customerSearch(searchParams: SearchAccountCriteriaParams): Promise<Customer[]> {
    return this._backCommsService.searchCustomer(searchParams);
  }

  getCustomerCallRecords(customer: Customer): Promise<CallRecord[]> {
    return this._backCommsService.getCustomerCallRecords(customer.id);
  }

  getTodayContacts(account: Account): Promise<number> {
    return this._backCommsService.getAccountCalls(account.accountId, new Date());
  }

  getRoles(): Promise<Role[]> {
    return this._backCommsService.getRoles();
  }

  getCampaignCallRecordReasons(): Promise<CancelCampaignCallRecordReason[]> {
    return this._backCommsService.getCampaignCallRecordReasons();
  }

  //lov types
  getLovTypes(): Promise<LovType[]>{
    return this._backCommsService.getLovTypes();
  }

  //lov values
  getLovValues(code: string): Promise<LovValue[]>{
    return this._backCommsService.getLovValues(code);
  }

  //tickler processes
  getProcesses(): Promise<TicklerProcess[]>{
    return this._backCommsService.getProcesses();
  }

  //tickler types
  getTicklerTypes(ticklerProcess: TicklerProcess): Promise<TicklerType[]>{
    return this._backCommsService.getTicklerTypes(ticklerProcess? ticklerProcess.id : null);
  }

  getTicklerAttributesMap(ticklerType: TicklerType): Promise<TicklerAttributeMap[]>{
    return this._backCommsService.getTicklerAttributesMap(ticklerType.id);
  }
  //process case
  getCases(c: SearchTicklerCaseParams, sortOrder?: SortOrder, pagination?: Pagination):Promise<ProcessCase[]>{
    return this._backCommsService.getProcessCases(c.Id, c.AccountId, c.CifId, c.ProcessCd, c.StatusCd, c.AssignedUser, c.FollowUpDueCd, sortOrder ? sortOrder.isDesc: null , pagination ? pagination.currPage :null, pagination? pagination.pageSize: null);
  }

  getCaseById(processCase: ProcessCase):Promise<ProcessCase>{
    return this._backCommsService.getCaseById(processCase.id);
  }

  //process case tickler
  getProcessCaseTicklers(pc: ProcessCase, pagination?: Pagination, isCore?: boolean): Promise<ProcessCaseTickler[]>{
    return this._backCommsService.getProcessCaseTicklers(pc ? pc.id : null, pagination ? pagination.currPage: null, pagination ? pagination.pageSize : null, isCore? isCore : null);
  }

  //tickler type map
  getTicklerTypesMap(ticklerType: TicklerType): Promise<TicklerTypeMap[]>{
    return this._backCommsService.getTicklerTypesMap(ticklerType ? ticklerType.id : null);
  }

  getTicklerAttributes(): Promise<TicklerAttribute[]>{
    return this._backCommsService.getTicklerAttributes();
  }

  getListOfValues(attribute: TicklerAttribute): Promise<Code[]>{
    return this._backCommsService.getListOfValues(attribute.lovCode);
  }

  //Campaign list order by type
  getClOrderByTypes(campaignType: string): Promise<CampaignListOrderByType[]>{
    return this._backCommsService.getClOrderByTypes(campaignType);
  }

  getGlobalCampaigns(): Promise<Campaign[]> {
    return this._backCommsService.getCampaigns();
  }

  setCampaignsDefaultValues(campaign: Campaign, attributes: Object): Promise<number> {
    let defaultValues = {
      CampaignCd: campaign.code
    };
    for (let att in attributes) {
      if (attributes[att].length > 0) {
        // Find the attribute to check if it exists and if it has multiple values
        const atr = campaign.attributes.find(at => at.code == att);
        if (atr) {
          defaultValues[att] = atr.isArray ? attributes[att] : attributes[att][0];
        }
      }
    }
    return this._backCommsService.setCampaignsDefaultValues(campaign.code, JSON.stringify(defaultValues));
  }

  getCampaignListRecordStatusCodes(): Promise<Code[]> {
    let codes = [
      new Code(CampaignListCodeNew, "New"),
      new Code("LOCKED", "Locked"),
      new Code("PENDING", "Pending"),
      new Code("DONE", "Done"),
      new Code("CANCELED", "Canceled")
    ];
    return new Promise<Code[]>(s => s(codes));
  }

  getCampaignListStatusCodes(): Promise<Code[]> {
    let codes = [
      new Code("CLOSED", "Closed"),
      new Code("NEW", "New"),
      new Code(inProgressStatus, "In progress"),
      new Code(pausedStatus, "Paused"),
    ];
    return new Promise<Code[]>(s => s(codes));
  }

  getTicklerStatusCodes(): Promise<Code[]> {
    let codes = [
      new Code("NEW", "New"),
      new Code("IN PROGRESS", "In progress"),
      new Code("CLOSED", "Closed")
    ];
    return new Promise<Code[]>(s => s(codes));
  }

  getFollowUpDueCodes(): Promise<Code[]>{
    let codes = [
      new Code("DUE", "Due"),
      new Code("NODUE", "Not due"),
      new Code("NULL", "Not set"),
    ];
    return new Promise<Code[]>(s=>s(codes));
  }

  getAccountTypes(): Promise<Code[]>{
    let codes = [
      new Code("L", "Loan"),
      new Code("D", "Deposit"),
      new Code("S", "Savings")
    ];
    return new Promise<Code[]>(s=>s(codes));
  }

  getTicklerAttributeCodes(): Promise<Code[]> {
    let codes = [
      new Code(AttributeType.string.toString(), "String"),
      new Code(AttributeType.number.toString(), "Number"),
      new Code(AttributeType.date.toString(), "Date"),
      new Code(AttributeType.datetime.toString(), "Date and time"),
      new Code(AttributeType.lov.toString(), "List of values"),
    ];
    return new Promise<Code[]>(s => s(codes));
  }

  getLovTypeCodes(): Promise<Code[]> {
    let codes = [
      new Code(AttributeType.string.toString(), "String"),
      new Code(AttributeType.number.toString(), "Number"),
      new Code(AttributeType.datetime.toString(), "Date")
    ];
    return new Promise<Code[]>(s => s(codes));
  }

  getCampaignLists(cp: Campaign, status: { code: string }, pg: Pagination): Promise<CampaignList[]> {
    return this._backCommsService.getCampaignLists(cp.code, status ? status.code : null, pg.currPage, pg.pageSize);
  }

  getCampaignListAccounts(cp: SearchCampaignCriteriaParams, pagination: Pagination):Promise<CampaignListAccount[]>{
    return this._backCommsService.getCampaignListAccounts(cp.campaignCd, cp.customerName, cp.accountId, cp.cifId, cp.statusCd, pagination.currPage, pagination.pageSize);
  }

  getTaskList(agent: Agent, cp: SearchTaskInboxParams, pagination: Pagination, sortOrder: SortOrder):Promise<BPMTask[]>{
    return this._pamCommsService.getTaskList(agent.account, cp.WithOwner, cp.WithoutOwner, pagination.currPage, pagination.pageSize, sortOrder ? sortOrder.isDesc : null, sortOrder ? sortOrder.sortType : null);
  }

  getProcessesList(cp: SearchProcessesListParams, pagination: Pagination, sortOrder: SortOrder):Promise<BPMProcessInstance[]>{
    return this._pamCommsService.getProcessesList(cp.ProcessType.containerId, pagination.currPage, pagination.pageSize, sortOrder ? sortOrder.isDesc : null, sortOrder ? sortOrder.sortType : null);
  }

  //calls per hour
  getCallsPersHour(clp: SearchCallsPerHourCriteriaParams):Promise<CallsPersHour[]>{
    return this._backCommsService.getCallsPersHour(clp.CampaignCd, clp.StartDate);
  }

  //incoming calls
  getIncomingCalls(ic: SearchCallsIncomingCallsCriteriaParams):Promise<IncomingCalls[]>{
    return this._backCommsService.getIncomingCalls(ic.StartDate);
  }

  //contact percentage
  getContactPercentage(clp: SearchContactPercentageCriteriaParams):Promise<ContactPercentage[]>{
    return this._backCommsService.getContactPercentage(clp.CampaignCd, clp.StartDate);
  }

  //campaign record history
  loadCampaignRecordHistory(crh: CampaignListRecord):Promise<CampaignRecordHistory[]>{
    return this._backCommsService.getCampaignRecordHistory(crh.accountId, crh)
  }

  loadCampaignListStatistics(cpl: CampaignList): Promise<CampaignStatsToken[]> {
    return this._backCommsService.getCampaignListStatistics(cpl.id, cpl)
  }

  createCampaignList(cp: Campaign, agent: Agent, uploadId: number, atts: { code: string, values: any[], isArray: boolean }[]): Promise<number> {
    return this._backCommsService.createCampaignList(cp.code, agent.account, uploadId, atts);
  }

  launchCampaignList(cpl: CampaignList, agent: Agent): Promise<boolean> {
    return this._backCommsService.launchCampaignList(cpl.id, agent.account);
  }

  getCampaignListRecords(cl: CampaignList, status: { code: string }, pg: Pagination): Promise<CampaignListRecord[]> {
    return this._backCommsService.getCampaignListRecords(cl.id, status ? status.code : null, pg.currPage, pg.pageSize);
  }

  getCampaignStats(): Promise<CampaignStatsToken[]> {
    return this._backCommsService.getCampaignStats();
  }

  getCollectorsProductivity(from: Date, to: Date): Promise<CollectorProductivityRecord[]> {
    return this._backCommsService.getCollectorsProductivity(from, to);
  }

  getOverallProductivity(from: Date, to: Date): Promise<OverallProductivityRecord[]> {
    return this._backCommsService.getOverallProductivity(from, to);
  }

  getCurrentState(agent: Agent): Promise<AgentState> {
    return this._ciscoCommsService.getState(agent.ciscoUser, agent.ciscoAuthenticationToken);
  }

  loginFinesse(agent: Agent, password: string): Promise<boolean> {
    // return this.setCurrentStatus(agent, new AgentState(AgentStateCode.login));
    return this._ciscoCommsService.login(
      agent.ciscoUser,
      password,
      agent.ciscoExtension,
      agent.ciscoAuthenticationToken,
    );
  }

  logoutFinesse(agent: Agent) {
    this._ciscoCommsService.logout(agent.ciscoUser, agent.ciscoExtension, agent.ciscoAuthenticationToken);
  }

  getFinesseStreams(): {states: Observable<AgentState>, calls: Observable<Call>, debug: Observable<string>} {
    return this._ciscoCommsService.getDataStreams();
  }

  setCurrentStatus(agent: Agent, status: AgentState): Promise<AgentState> {
    return this._ciscoCommsService.setStatus(agent.ciscoUser, agent.ciscoExtension, status, agent.ciscoAuthenticationToken);
  }

  makeCall(from: Agent, to: Phone): Promise<boolean> {
    return this._ciscoCommsService.makeCall(from.ciscoUser, from.ciscoExtension, to.number, from.ciscoAuthenticationToken);
  }

  answerCall(call: Call, agent: Agent): Promise<boolean> {
    // return this._ciscoCommsService.answerCall(call.to, call.ciscoId, agent.ciscoAuthenticationToken);
    // Use allways the cisco Extension to answer the call
    return this._ciscoCommsService.answerCall(agent.ciscoExtension, call.ciscoId, agent.ciscoAuthenticationToken);
  }

  endCall(call: Call, agent: Agent): Promise<boolean> {
    // return this._ciscoCommsService.endCall(call.type == CallType.Outbound ? call.from : call.to, call.ciscoId, agent.ciscoAuthenticationToken);
    // Use allways the cisco Extension to end the call except for an incoming call in alerting state
    if (call.type == CallType.Inbound && call.state == CallState.Alerting) {
      return this._ciscoCommsService.endCall(call.from, call.ciscoId, agent.ciscoAuthenticationToken);
    }
    return this._ciscoCommsService.endCall(agent.ciscoExtension, call.ciscoId, agent.ciscoAuthenticationToken);
  }

  getCurrentCall(agent: Agent): Promise<Call> {
    return this._ciscoCommsService.getCurrentCall(agent.ciscoUser, agent.ciscoExtension, agent.ciscoAuthenticationToken);
  }

  subscribeCiscoEvents(agent: Agent) {
    // return this._ciscoCommsService.subscribeCiscoEvents(agent.ciscoAuthenticationToken);
  }

  addCallRecord(agent: Agent, account: Account, callRecord: NewCallRecordModel, call: Call, phone: Phone,
                isAutoDial: boolean, campaignCode: string, accountStatus: string, verifStatus: VerifStatus): Promise<boolean> {
    let now = new Date();
    return this._backCommsService.addCallRecord(
      agent.account,
      account.campaignRecordId,
      account.accountId,
      account.accountType,
      account.customer.id,
      // "2017-09-22 12:47:00 AM",
      // this._datePipe.transform(now, DatePatern) + ' ' + this._datePipe.transform(now, 'mediumTime'),
      callRecord.action,
      callRecord.party,
      callRecord.result,
      // TODO: hard coded at this moment
      "SUCCESS",
      callRecord.message,
      this._datePipe.transform(callRecord.nextWorkDate, DatePatern),
      this._datePipe.transform(callRecord.promisedDate, DatePatern),
      callRecord.promisedAmount,
      callRecord.callLaterDate ? this._datePipe.transform(callRecord.callLaterDate, DatePatern) + ' ' + this._datePipe.transform(callRecord.callLaterDate, 'mediumTime') : null,
      agent.account,
      call ? call.ciscoId : null,
      (call && call.talkStart) ? this._datePipe.transform(call.talkStart, DatePatern) + ' ' + this._datePipe.transform(call.talkStart, 'mediumTime') : null,
      (call && call.talkEnd) ? this._datePipe.transform(call.talkEnd, DatePatern) + ' ' + this._datePipe.transform(call.talkEnd, 'mediumTime') : null,
      (call && call.counterpartNumber) ? call.counterpartNumber : null,
      isAutoDial && call && phone ? phone.phoneLineTypeCode : null,
      call ? isAutoDial : null,
      account.customer.mainContact.firstName,
      account.customer.mainContact.lastName,
      agent.account,
      "none",
      campaignCode,
      account.collection ? account.collection.collectionStatusCode : (account.accountDep ? account.accountDep.collectionStatusCode : null),
      account.collection ? account.collection.lastPromiseDate : (account.accountDep ? account.accountDep.lastPromiseDate : null),
      account.loan ? account.loan.currentBalance : (account.accountDep ? account.accountDep.curBal : null),
      account.collection ? account.collection.daysPastDue : (account.accountDep ? account.accountDep.daysOverdrawn : null),
      agent.ciscoExtension,
      account.collection ? account.collection.languageCode : null,
      account.additionalInfo ? account.additionalInfo.eaPcFlag : null,
      accountStatus,
      verifStatus.addr,
      verifStatus.email,
      verifStatus.phone,
    );
  }

  newCallNote(account: Account, memoNote: MemoNote, agent: Agent): Promise<boolean>{
    return this._backCommsService.addCallNotes(account.accountId, account.accountType, account.customer.id, memoNote.note, agent.account);
  }

  cancelCallRecord(agent:Agent, account: Account, cancelRecord: CancelRecordModel): Promise<boolean> {
    return this._backCommsService.cancelCallRecord(agent.account, account.campaignRecordId, cancelRecord.reason.code, cancelRecord.message, cancelRecord.flag);
  }

  assignAgentToCampaign(agent: Agent, campaign: Campaign, assign: boolean, requester: Agent): Promise<boolean> {
    return this._backCommsService.assignAgentToCampaign(agent.account, campaign.code, assign, requester.account);
  }

  assignAgentToRole(agent: Agent, role: Role, assign: boolean, requester: Agent): Promise<boolean> {
    return this._backCommsService.assignAgentToRole(agent.account, role.code, assign, requester.account);
  }

  //Tickler functions
  createCaseTickler(account: Account, customer: Customer, agent: Agent, model: ProcessCaseModel): Promise<number>{
    return this._backCommsService.createCaseTickler(
      account.accountId,
      customer.id,
      model.processCode.processCode,
      model.caseDescription,
      agent.account,
      customer.mainContact ? customer.mainContact.firstName : null,
      customer.mainContact ? customer.mainContact.lastName : null,
      account.accountType
    );
  }

  addCaseTickler(processCase: ProcessCase, model: ProcessCaseTickler, attributes, agent: Agent): Promise<number>{
    return this._backCommsService.addCaseTickler(processCase.id, model.ticklerTypeCode, model.ticklerDescription, model.followUpDays, model.document, attributes, agent.account);
  }

  addCustomerConsent(customer: Customer, model: CustomerConsent, agent: Agent): Promise<number>{
    return this._backCommsService.addCustomerConsent(customer.id, model.hasConsent, model.phoneNumber, model.note, agent.account);
  }

  addOrderBy(campaignList: CampaignList, agent: Agent, sortCode: string, ascending: boolean): Promise<number>{
    return this._backCommsService.addOrderBy(agent.account, campaignList.id, sortCode, ascending);
  }

  //update status code
  updateCLStatus(campaignList: CampaignList, agent: Agent): Promise<number>{
    return this._backCommsService.updateCLStatus(campaignList.id, campaignList.statusCode, agent.account);
  }

  newTicklerType(ticklerProcess: TicklerProcess, model: TicklerTypeModel, agent: Agent): Promise<number>{
    return this._backCommsService.newTicklerType(
      ticklerProcess.id,
      model.ticklerCode,
      model.ticklerName,
      model.ticklerDescription,
      model.actionRequired,
      model.activeFlag,
      model.isCloseable,
      model.isCore,
      model.orderByCode,
      model.followUpDays,
      agent.account
    )
  }

  updateTicklerType(ticklerType: TicklerType, model: TicklerTypeModel, agent: Agent): Promise<number>{
    return this._backCommsService.updateTicklerType(
      ticklerType.id,
      model.ticklerName,
      model.ticklerDescription,
      model.activeFlag,
      model.actionRequired,
      model.isCloseable,
      model.isCore,
      model.isBase,
      model.orderByCode,
      model.followUpDays,
      agent.account
    );
  }

  removeTicklerType(ticklerType: TicklerType): Promise<number>{
    return this._backCommsService.removeTicklerType(ticklerType.id);
  }

  addLovType(model: LovTypeModel, agent: Agent): Promise<number>{
    return this._backCommsService.addLovType(model.lovCode,model.lovName, model.lovDescription, model.isActive, model.type ,agent.account)
  }

  addLovValue(lovType: LovType, lovValue: LovValue, agent: Agent): Promise<boolean>{
    return this._backCommsService.addLovValue(lovType.id, lovValue.valueCode, lovValue.valueName, lovValue.valueDescription, agent.account)
  }

  newTicklerAttribute(model: TicklerAttributeModel, agent: Agent): Promise<number>{
    return this._backCommsService.newTicklerAttribute(model.attributeCode, model.attributeName, model.attributeDescription, model.activeFlag, model.arrayFlag, model.dataType, model.lovCode, agent.account)
  }

  updateTicklerAttribute(ticklerAttribute: TicklerAttribute, model: TicklerAttributeModel, agent: Agent): Promise<number>{
    return this._backCommsService.updateTicklerAttribute(ticklerAttribute.id, model.attributeName, model.attributeDescription, model.activeFlag, model.arrayFlag, agent.account);
  }

  addTicklerAttributeMap(ticklerType: TicklerType, ticklerAttribute: TicklerAttribute, agent: Agent): Promise<number>{
    return this._backCommsService.addTicklerAttributeMap(ticklerType.id, ticklerAttribute.id, ticklerAttribute.mandatoryFlag, agent.account);
  }

  deleteTicklerAttributeMap(ticklerAttributeMap: TicklerAttributeMap): Promise<number>{
    return this._backCommsService.deleteTicklerAttributeMap(ticklerAttributeMap.id);
  }

  deleteLovType(lovType: LovType, agent: Agent): Promise<number>{
    return this._backCommsService.deleteLovType(lovType.id, agent.account);
  }

  deleteLovValue(lovValue: LovValue, agent: Agent): Promise<number>{
    return this._backCommsService.deleteLovValue(lovValue.id, agent.account);
  }

  addTicklerTypeMap(ticklerType: TicklerType, ticklerType2: TicklerType, agent: Agent): Promise<number>{
    return this._backCommsService.addTicklerTypeMap(ticklerType.id, ticklerType2.id , agent.account);
  }

  deleteTicklerTypeMap(ticklerTypeMap: TicklerTypeMap): Promise<number>{
    return this._backCommsService.deleteTicklerTypeMap(ticklerTypeMap.id);
  }

  updateTicklerAttributeMap(ticklerAttributeMap: TicklerAttributeMap, agent: Agent): Promise<number>{
    return this._backCommsService.updateTicklerAttributeMap(ticklerAttributeMap.id, ticklerAttributeMap.mandatoryFlag, agent.account);
  }

  updateLovType(lovType: LovType, model: LovTypeModel, agent: Agent): Promise<number>{
    return this._backCommsService.updateLovType(lovType.id, model.lovCode, model.lovName, model.lovDescription, model.isActive, model.type, agent.account);
  }

  updateLovValue(lovValue: LovValue, model: LovValue, agent: Agent): Promise<number>{
    return this._backCommsService.updateLovValue(lovValue.id, model.valueCode, model.valueName, model.valueDescription, model.isActive, agent.account);
  }

  deleteCaseTickler(caseTickler: ProcessCaseTickler, agent: Agent): Promise<boolean>{
    return this._backCommsService.deleteCaseTickler(caseTickler.id, agent.account);
  }

  addAddressVerification(addressVerification: AddressVerification, customer: Customer, agent: Agent): Promise<number>{
    return this._backCommsService.addAddressVerification(
      customer.id,
      addressVerification.oldAddress.streetAddress1,
      addressVerification.oldAddress.streetAddress2,
      addressVerification.oldAddress.streetAddress3,
      addressVerification.oldAddress.city,
      addressVerification.oldAddress.stateCode,
      addressVerification.oldAddress.postalCode,
      addressVerification.newAddress.streetAddress1,
      addressVerification.newAddress.streetAddress2,
      addressVerification.newAddress.streetAddress3,
      addressVerification.newAddress.city,
      addressVerification.newAddress.stateCode,
      addressVerification.newAddress.postalCode,
      addressVerification.note,
      addressVerification.status,
      agent.account
    );
  }

  addEmailVerification(emailVerification: EmailListVerification, customer: Customer, agent: Agent): Promise<number>{
    return this._backCommsService.addEmailVerification(
      customer.id,
      emailVerification.emails,
      emailVerification.newEmails,
      emailVerification.note,
      emailVerification.status,
      agent.account
    );
  }

  addPhoneVerification(phoneVerification: PhoneListVerification, customer: Customer, agent: Agent): Promise<number>{
    let phone: {phoneNr: string, phoneType: PhoneType, phoneLineType: LineType}[] = [];

    // ---- Workaround to temporally solve back issues when field "Phone" is an empty array ----
    if (phoneVerification.phones.length === 0) {
      phone.push({
        phoneNr: "0000000000",
        phoneType: PhoneType.NA,
        phoneLineType: LineType.NA
      });
    }
    // ----- End workaround -----------

    phoneVerification.phones.forEach(p => {
      phone.push({
        phoneNr: p.number,
        phoneType: p.type,
        phoneLineType: p.lineType
      });
    });
    let newPhone: {phoneNr: string, phoneType: PhoneType, phoneLineType: LineType}[] = [];
    phoneVerification.newPhones.forEach(p => {
      newPhone.push({
        phoneNr: p.number,
        phoneType: p.type,
        phoneLineType: p.lineType
      });
    });
    return this._backCommsService.addPhoneVerification(
      customer.id,
      phone,
      newPhone,
      phoneVerification.note,
      phoneVerification.status,
      agent.account
    );
  }

  bpm_getCases(accountId: string, accountType: string): Promise<BPMCase[]>{
    return this._backCommsService.bpm_getCases(accountId, accountType);
  }

  bpm_getProcessTypes(): Promise<BPMProcessType[]>{
    return this._backCommsService.bpm_getProcessTypes();
  }

  bpm_createCase(account: Account, processType: any, note: string, agent: Agent): Promise<number>{
    return this._pamCommsService.createCase(processType.containerId, processType.processId).then(val => {
      return this._backCommsService.bpm_createCase(
        account.accountId,
        account.accountType,
        account.customer.cifNo,
        val,
        processType.containerId,
        processType.processId,
        processType.processName,
        processType.processVersion,
        note,
        agent.account
      );
    }).catch (err => {
      console.log("Error creating BPM process", err);
      this._userFeedbackService.handleError("Error creating BPM process", err);
    })
  }

  completeTask(task: BPMTask, inputVariables: BPMVariable[], bpmCase: BPMCase, agent: Agent): Promise<number>{
    return this._pamCommsService.completeTask(task, inputVariables, bpmCase.containerId, agent.account);
  }

  doSignal(bpmCase: BPMCase, signal: string): Promise<number>{
    return this._pamCommsService.doSignal(bpmCase.containerId, bpmCase.processInstanceId, signal);
  }

  getCompleteInfoForCase(bpmCase: BPMCase): Observable<BPMProcessInstance>{
    let ret = new Subject<BPMProcessInstance>();

    this._pamCommsService.getProcessCurrentStatus(bpmCase.containerId, bpmCase.processInstanceId)
      .then(bpmcase => {
        let currentTask = bpmcase.currentTask.length > 0 ? bpmcase.currentTask[0] : null;
        ret.next(bpmcase);

        if (currentTask != null) {

          this._pamCommsService.getInputVariables(bpmCase.containerId, bpmCase.processId, currentTask.taskName)
            .then(variables => {
              bpmcase.inputVariables = variables;
              ret.next(bpmcase);
            })
            .catch(err => {
                this._userFeedbackService.handleError("Error getting process instance input variables", err);
                console.log(err);
            });

          this._pamCommsService.getDueDate(currentTask.taskId)
            .then(date => {
              bpmcase.currentTask[0].taskExpirationTime = date;
              ret.next(bpmcase);
            })
            .catch(err => {
                this._userFeedbackService.handleError("Error getting due date", err);
                console.log(err);
              });
        }

        this._pamCommsService.getSignals(bpmCase.containerId, bpmCase.processInstanceId)
          .then(signals => {
            bpmcase.signals = signals;
            ret.next(bpmcase);
          })
          .catch(err => {
              this._userFeedbackService.handleError("Error getting signals", err);
              console.log(err);
            });

        this._pamCommsService.getCompletedTasks(bpmCase.containerId, bpmCase.processInstanceId)
          .then(tasks => {
            bpmcase.historicTasks = tasks.sort(function(a, b) {
              if (a.startDate > b.startDate) return -1;
              if (a.startDate < b.startDate) return 1;
              return 0;
            });

            this._pamCommsService.getTasksUsedVariables(bpmCase.containerId, bpmCase.processInstanceId)
              .then(usedVariables => {
                for (let v in usedVariables) {
                  this._pamCommsService.getTaskVariableValues(bpmCase.containerId, bpmCase.processInstanceId, usedVariables[v])
                    .then(values => {
                      for (let i in bpmcase.historicTasks) {
                        let node = bpmcase.historicTasks[i];
                        for (let v in values) {
                          if (node.startDate && values[v].modificationDate && (values[v].modificationDate === node.startDate ||
                            (values[v].modificationDate > node.startDate - 1000 && values[v].modificationDate < node.startDate + 1000))) {
                            node.usedVariables.push(values[v]);
                          }
                        }
                      }
                      ret.next(bpmcase);
                    })
                    .catch(err => {
                      this._userFeedbackService.handleError("Error getting variable values", err);
                      console.log(err);
                    });
                }
                if (!usedVariables || usedVariables.length === 0)
                  ret.next(bpmcase);
              })
              .catch(err => {
                this._userFeedbackService.handleError("Error getting task variables", err);
                console.log(err);
              });
          })
          .catch(err => {
            this._userFeedbackService.handleError("Error getting completed tasks", err);
            console.log(err);
          });

        this._pamCommsService.loadProcessSvg(bpmCase.containerId, bpmCase.processInstanceId)
          .then(svg => {
            bpmcase.processSvg = svg;
            ret.next(bpmcase);
          })
          .catch(err => {
              this._userFeedbackService.handleError("Error getting diagram", err);
              console.log(err);
            });

      })
      .catch(err => {
        this._userFeedbackService.handleError("Error getting process instance state", err);
        console.log(err);
      });

    return ret;
  }

  getTasksRelatedAccount(taskList: BPMTask[]): Promise<Account[]>{
    let processIds: number[] = [];
    for (let t in taskList) {
      processIds.push(taskList[t].taskProcessInstanceId);
    }
    return this._backCommsService.getTasksRelatedAccount(processIds);
  }

  getProcessesRelatedAccount(processesList: BPMProcessInstance[]): Promise<Account[]>{
    let processIds: number[] = [];
    for (let t in processesList) {
      processIds.push(processesList[t].processInstanceId);
    }
    return this._backCommsService.getTasksRelatedAccount(processIds);
  }

  abortProcess(bpmCase: BPMCase) {
    return this._pamCommsService.abortProcess(bpmCase.containerId, bpmCase.processInstanceId);
  }

  sendAbortProcessNote(bpmCase: BPMCase, note: string) {
    return this._backCommsService.sendAbortProcessNote(bpmCase.processInstanceId, note);
  }

  getFipsDisasters(fips: string, stateCode: string) {
    return this._femaCommsService.getFipsDisasters(fips, stateCode);
  }

  getCustomerAlerts(customerId, accountId, accountType): Promise<CustomerNote[]> {
    return this._backCommsService.getCustomerAlerts(customerId, accountId, accountType);
  }

  updateCustomerMessage(note: CustomerNote, newMsg: string): Promise<number> {
    return this._backCommsService.updateCustomerMessage(note.accountId, note.accountType, note.msgType, note.msgSeq, note.customerId, newMsg);
  }

  // tslint:disable-next-line:one-line
  importLoanAccounts(): Promise<number>{
    return this._backCommsService.importLoanAccounts();
  }

  importDepositAccounts(): Promise<number>{
    return this._backCommsService.importDepositAccounts();
  }
  private handleError(code: DSErrorCodes, message: string, severity: number, inner: any, errorStream?: Subject<UFNotification>) {
    // Create the UFNotification
    let error = new UFNotification(code, message, severity, inner);
    // Send it to the right place
    errorStream ? errorStream.next(error) : this._userFeedbackService.handleNotification(error);
  }
}
