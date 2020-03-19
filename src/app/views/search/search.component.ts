import {Customer} from "../../models/customer";
import {Account} from "../../models/account";
import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/switchMap';
import {DataService} from "../../services/data.service";
import {UFNotification, UserFeedbackService} from "../../services/user-feedback.service";
import {UFSeverity} from "../../services/ufseverity";
import {SearchAccountCriteriaParams} from "../../models/search-account-criteria-params";
import {CampaignListAccount} from "../../models/campign-list-accounts";
import {SearchCampaignCriteriaParams} from "../../models/search-campaign-criteria-params";
import {Pagination} from "../../models/pagination";
import {TicklerProcess} from "../../models/tickler-processes";
import {PublicUrls, UrlComponents} from "../../routing-constants";

import {
  AccountListInfo, CampaignListInfo, ProcessesListInfo, TasksListInfo,
  TemporalStateServiceService
} from "../../services/temporal-state-service.service";
import {Code} from "../../models/code";
import {Campaign} from "../../models/campaign";
import {SearchTaskInboxParams} from "../../models/search-task-inbox-params";
import {BPMProcessInstance, BPMTask} from "../../models/bpm-case";
import {GlobalStateService} from "../../services/global-state.service";
import {Agent} from "../../models/agent";
import {SearchProcessesListParams} from "../../models/search-processes-list-params";
import {SortOrder} from "../../models/sort-order";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../homeview.component.css', './search.component.css']
})
// export class SearchComponent implements OnInit, AfterViewInit {
export class SearchComponent implements OnInit {
  routes = PublicUrls;
  tokens = UrlComponents;

  private customers: Customer[] = null;
  private currentCustomer: Customer = null;
  private currentAccounts: Account[] = null;
  currentAccountsWhenFilter = this.currentAccounts;
  private currentAccountsPaginated: Account[] = null;

  //
  // private sentences = this.text;
  // private filterSentences = null;
  // private sentencesWhenFilter = this.sentences;

  private campaignListAccounts: CampaignListAccount[] = null;
  private taskList: BPMTask[] = [];
  private processesList: BPMProcessInstance[] = [];
  private customerNotFound: boolean = false;  // Customer searched but not found
  private searchingCustomer: boolean = false;
  private searchingAccounts: boolean = false;
  private searchingProcesses: boolean = false;
  private searchingTasks: boolean = false;

  private searchingCampaignListAccounts: boolean = false;
  private currentCampaignListAccounts: CampaignListAccount = null;

  private clAccountsPagination: Pagination = new Pagination(0, 15);
  private clCurrentParams: SearchCampaignCriteriaParams = null;

  private taskPagination: Pagination = new Pagination(0, 10);
  private taskParams: SearchTaskInboxParams = null;

  private processesPagination: Pagination = new Pagination(0, 10);
  private processesParams: SearchProcessesListParams = null;

  private accountsPagination: Pagination = new Pagination(0, 10);

  private sortOrderTasks: SortOrder = new SortOrder(true, 'expirationTime');
  private sortOrderProcesses: SortOrder = new SortOrder(true, 'start');

  private isClAccountsVisible: boolean = false;
  private isCustommerVisible: boolean = false;
  private isTaskInboxVisible: boolean = false;
  private isProcessesListVisible: boolean = false;

  private searchFilter: SearchAccountCriteriaParams = null;
  private searchFilterWhenChange: SearchAccountCriteriaParams = null;
  private _customerStream = new Subject<SearchAccountCriteriaParams>();
  private _accountsStream = new Subject<Customer>();


  @Input() currentServiceParams: CampaignListInfo = new CampaignListInfo();
  @Input() currentTaskServiceParams: TasksListInfo = new TasksListInfo();
  @Input() currentAccountServiceParams: AccountListInfo = new AccountListInfo();
  @Input() currentProcessesServiceParams: ProcessesListInfo = new ProcessesListInfo();
  @Input() processes: TicklerProcess[] = null;
  @Input() currentTab: string;
  @Input() nextCallCampaigns: Campaign[] = null;
  @Input() nextCallStatuses: Code[] = null;
  @Input() accountTypes: Code[] = null;

  constructor(private _dataService: DataService, private _userFeedbackService: UserFeedbackService,
              private _temporalStateService: TemporalStateServiceService, private _globalStateService: GlobalStateService) {
  }

  ngOnInit() {
    //load data
    this.subscribeCustomer();
    this.subscribeAccounts();
  }

  /*
  *
  * return the data of the temporal service
  *
  * */
  get currentCampaignParams(): CampaignListInfo {
    return this._temporalStateService.campaignListInfo;
  }

  get currentAccountParams(): AccountListInfo {
    return this._temporalStateService.accountListInfo;
  }

  search(params: SearchAccountCriteriaParams) {
    this.customers = null;
    this.currentCustomer = null;
    this.currentAccounts = null;
    this.currentAccountsWhenFilter = [];
    this.currentAccountsPaginated = [];
    this.customerNotFound = false;
    this.searchingCustomer = true;
    this._customerStream.next(params);

    this.searchFilter = params.clone();
  }

  searchAccountsForCustomer(cust: Customer) {
    this.currentAccounts = null;
    this.currentAccountsWhenFilter = null;
    this.currentAccountsPaginated = null;
    this.searchingAccounts = true;
    this.currentCustomer = cust;
    this._accountsStream.next(cust);
  }

  private subscribeCustomer() {
    this._customerStream
      .switchMap(params => {
        return this._dataService
          .customerSearch(params);
      })
      .subscribe(
        custs => {
          this.searchingCustomer = false;
          if (custs.length > 0) {
            this.customers = custs;
            this.customerNotFound = false;
          } else {
            this.customers = [];
            this.customerNotFound = true;
            this._accountsStream.next(null);
          }
          // Search accounts only if 1 customer found
          if (this.customers.length == 1) {
            this.searchAccountsForCustomer(this.customers[0]);
          }
        },
        error => {
          // Notify the user and cancel search
          this._userFeedbackService.handleNotification(
            new UFNotification(0, "Error getting customer", UFSeverity.error, error)
          );
          this.customers = null;
          this.currentAccounts = null;
          // this.currentAccountsWhenFilter = null;
          this.customerNotFound = false;
          this.searchingCustomer = false;
          this.searchingAccounts = false;
          // We need new subscriptions
          this.subscribeCustomer();
        });

  }

  private subscribeAccounts() {
    this._accountsStream
      .switchMap(customer => {
        // If null received, no customer found
        if (!customer) {
          return new Promise<Account[]>(resolve => resolve([]));
        }
        // this.searchFilterWhenChange = this.searchFilter;
        if(this.searchFilter.accountId!="" || this.currentAccountParams){
          return this._dataService
            .getCustomerAccounts(customer, this.searchFilter.accountType);
        } else{
          if(this.customers.length > 1) this.searchFilter.accountType = null;
          return this._dataService
            .getCustomerAccounts(customer, null);
        }
      })
      .subscribe(
        accounts => {
          this.searchingAccounts = false;
          this.currentAccounts = accounts;
          this.currentAccounts.sort(SearchComponent.sortAccounts);
          this.accountsTypeFilter();
          this.paginateAccounts();
          // this.currentAccountServiceParams.currentParams.accountType = null;
        },
        error => {
          // Notify the user and cancel search
          this._userFeedbackService.handleNotification(
            new UFNotification(0, "Error getting accounts", UFSeverity.error, error)
          );
          this.currentAccounts = null;
          this.currentAccountsWhenFilter = null;
          this.currentAccountsPaginated = null;
          this.searchingAccounts = false;
          // We need new subscriptions
          this.subscribeAccounts();

        })
  }

  static sortAccounts(a, b) {
    let aDays = a.accountType == 'L' ? (a.pastDueDays ? parseInt(a.pastDueDays) : -1) : (a.daysOverDrawn ? parseInt(a.daysOverDrawn) : -1);
    let bDays = b.accountType == 'L' ? (b.pastDueDays ? parseInt(b.pastDueDays) : -1) : (b.daysOverDrawn ? parseInt(b.daysOverDrawn) : -1);
    if (aDays < bDays) return 1;
    if (aDays > bDays) return -1;
    return 0;
  }

  private paginateAccounts() {
    this.currentAccountsPaginated = this.currentAccountsWhenFilter.slice(this.accountsPagination.currPage * this.accountsPagination.pageSize, (this.accountsPagination.currPage + 1) * this.accountsPagination.pageSize)
  }

  // private filter() {
  accountsTypeFilter() {
    this.currentAccountsWhenFilter = [];
    if(this.searchFilter.accountType === null){
      for (let i in this.currentAccounts) {
        if (this.currentAccounts[i].accountType == 'L' || this.currentAccounts[i].accountType == "D") {
          this.currentAccountsWhenFilter.push(this.currentAccounts[i]);
        }
      }
    }else{
        for (let i in this.currentAccounts) {
          if (this.searchFilter.accountType === this.currentAccounts[i].accountType) {
            this.currentAccountsWhenFilter.push(this.currentAccounts[i]);
          }
        }
    }
  }

  /*emit from de child --> click on view Cl
  *
  * if there are criteria params clone and keep it
  * */
  onViewCampaignListAccounts(params: SearchCampaignCriteriaParams = null, pagination?: Pagination) {
    if (params) {
      this.clCurrentParams = params.clone();
      this.clAccountsPagination.currPage = pagination ? pagination.currPage : 0;
    }

    this.searchingCampaignListAccounts = true;
    this.isClAccountsVisible = true;
    this.currentCampaignListAccounts = null;

    this._dataService.getCampaignListAccounts(this.clCurrentParams, this.clAccountsPagination).then(res => {
      this.campaignListAccounts = res;
      this.searchingCampaignListAccounts = false;

    }).catch(err => {
      // TODO: manage error
      console.log("Error retrieveing campaign list accounts");
      console.log(err);
      this.searchingCampaignListAccounts = false;

    });
  }

  onViewTaskInbox(params: SearchTaskInboxParams = null, pagination?: Pagination, sortOrder?: SortOrder) {
    if (params) {
      this.taskParams = params.clone();
      this.taskPagination.currPage = pagination ? pagination.currPage : 0;
      if (sortOrder) {
        this.sortOrderTasks.sortType = sortOrder.sortType;
        this.sortOrderTasks.isDesc = sortOrder.isDesc;
      }
      if (params.WithoutOwner && this.sortOrderTasks.sortType === 'id') {
        this.sortOrderTasks.sortType = 'processInstanceId';
      }
      else if (params.WithOwner && this.sortOrderTasks.sortType === 'processInstanceId') {
        this.sortOrderTasks.sortType = 'id';
      }
    }

    this.isTaskInboxVisible = true;
    this.taskList = [];
    this.searchingTasks = true;

    let agent: Agent = this._globalStateService.loggedAgent;

    this._dataService.getTaskList(agent, this.taskParams, this.taskPagination, this.sortOrderTasks).then(res => {
      this.taskList = res;
      this.searchingTasks = false;

    }).catch(err => {
      // TODO: manage error
      console.log("Error retrieveing task list");
      console.log(err);
      this.searchingTasks = false;
    });
  }

  onViewProcessesList(params: SearchProcessesListParams = null, pagination?: Pagination, sortOrder?: SortOrder) {
    if (params) {
      this.processesParams = params.clone();
      this.processesPagination.currPage = pagination ? pagination.currPage : 0;
      if (sortOrder) {
        this.sortOrderProcesses.sortType = sortOrder.sortType;
        this.sortOrderProcesses.isDesc = sortOrder.isDesc;
      }
    }

    this.isProcessesListVisible = true;
    this.processesList = [];
    this.searchingProcesses = true;

    this._dataService.getProcessesList(this.processesParams, this.processesPagination, this.sortOrderProcesses).then(res => {
      this.processesList = res;
      this.searchingProcesses = false;

    }).catch(err => {
      // TODO: manage error
      console.log("Error retrieveing task list");
      console.log(err);
      this.searchingProcesses = false;
    });
  }

  onClickViewCL(params: SearchCampaignCriteriaParams = null) {
    this.isCustommerVisible = false;
    this.isTaskInboxVisible = false;
    this.isProcessesListVisible = false;
    this.searchFilter = null;
    this.taskParams = null;
    this.processesParams = null;

    this.onViewCampaignListAccounts(params);
  }

  onClickSearch(params: SearchAccountCriteriaParams = null) {
    this.isClAccountsVisible = false;
    this.isTaskInboxVisible = false;
    this.isProcessesListVisible = false;
    this.isCustommerVisible = true;
    this.clCurrentParams = null;
    this.taskParams = null;
    this.processesParams = null;

    this.accountsPagination.currPage = 0;

    if (params.accountId == null || params.accountId == "") params.accountType = null;
    this.search(params);
  }

  onClickSearchTask(params: SearchTaskInboxParams = null) {
    this.isClAccountsVisible = false;
    this.isTaskInboxVisible = true;
    this.isCustommerVisible = false;
    this.isProcessesListVisible = false;
    this.clCurrentParams = null;
    this.searchFilter = null;
    this.processesParams = null;

    this.onViewTaskInbox(params);
  }

  onClickSearchProcesses(params: SearchProcessesListParams = null) {
    this.isClAccountsVisible = false;
    this.isTaskInboxVisible = false;
    this.isCustommerVisible = false;
    this.isProcessesListVisible = true;
    this.clCurrentParams = null;
    this.searchFilter = null;
    this.taskParams = null;

    this.onViewProcessesList(params);
  }

  refreshTaskOrder(order){
    this.sortOrderTasks = order;
    this.onViewTaskInbox();
  }

  refreshProcessesOrder(order){
    this.sortOrderProcesses = order;
    this.onViewProcessesList();
  }

  private incPage(increment = 1) {
    this.clAccountsPagination.currPage += increment;
    this.onViewCampaignListAccounts();
  }

  private incTasksPage(increment = 1) {
    this.taskPagination.currPage += increment;
    this.onViewTaskInbox();
  }

  private incProcessesPage(increment = 1) {
    this.processesPagination.currPage += increment;
    this.onViewProcessesList();
  }

  private incAccountsPage(increment = 1) {
    this.accountsPagination.currPage += increment;
    this.paginateAccounts();
  }

  get isCAccountsVisible(): boolean {
    return this.isClAccountsVisible;
  }

  set isCAccountsVisible(value: boolean) {
    this.isClAccountsVisible = value;
  }

  get isCustVisible() {
    return this.isCustommerVisible;
  }

  set isCustVisible(value: boolean) {
    this.isCustommerVisible = value;
  }

  get isTaskVisible() {
    return this.isTaskInboxVisible;
  }

  set isTaskVisible(value: boolean) {
    this.isTaskInboxVisible = value;
  }

  get isProcessesVisible() {
    return this.isProcessesListVisible;
  }

  set isProcessesVisible(value: boolean) {
    this.isProcessesListVisible = value;
  }

  get accountFilter(): SearchAccountCriteriaParams {
    return this.searchFilter;
  }

  set accountFilter(value: SearchAccountCriteriaParams) {
    this.searchFilter = value;
  }

  get campaignFilter(): SearchCampaignCriteriaParams {
    return this.clCurrentParams;
  }

  set campaignFilter(value: SearchCampaignCriteriaParams) {
    this.clCurrentParams = value;
  }

  get taskFilter(): SearchTaskInboxParams {
    return this.taskParams;
  }

  set taskFilter(value: SearchTaskInboxParams) {
    this.taskParams = value;
  }

  get processesFilter(): SearchProcessesListParams {
    return this.processesParams;
  }

  set processesFilter(value: SearchProcessesListParams) {
    this.processesParams = value;
  }

}
