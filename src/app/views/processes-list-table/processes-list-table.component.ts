import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchProcessesListParams} from "../../models/search-processes-list-params";
import {ProcessesListInfo, TemporalStateServiceService} from "../../services/temporal-state-service.service";
import {BPMProcessInstance, processStates} from "../../models/bpm-case";
import {Pagination} from "../../models/pagination";
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {UserFeedbackService} from "../../services/user-feedback.service";
import {PublicUrls} from "../../routing-constants";
import {CoinConstants} from "../../services/coin-constants";
import {SortOrder} from "../../models/sort-order";

@Component({
  selector: 'processes-list-table',
  templateUrl: './processes-list-table.component.html',
  styleUrls: ['./processes-list-table.component.css']
})
export class ProcessesListTableComponent implements OnInit {
  @Input() processesParams: SearchProcessesListParams;
  @Input() currentProcessesServiceParams: ProcessesListInfo;
  @Input() processesList: BPMProcessInstance[] = null;
  @Output() onSearch = new EventEmitter<SortOrder>();
  @Input() pagination: Pagination;
  @Input() sort: SortOrder;
  @Input() hasToSaveParams: boolean = false;
  @Input() searching: boolean = false;

  private processes_account_initLoaded: boolean = false;

  constructor(private _router: Router, private _temporalStateService: TemporalStateServiceService,
              private _dataService: DataService, private _userFeedbackService: UserFeedbackService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes){
    if(changes.currentProcessesServiceParams && this.currentProcessesServiceParams && this.currentProcessesServiceParams.currentPagination){
      this.setCurrentPagination();
    }
    if (changes.processesList && this.processesList && this.processesList.length > 0) {
      this.loadProcessesAccount();
    }
  }

  setCurrentPagination(){
    this.pagination.currPage = this.currentProcessesServiceParams.currentPagination.currPage;
  }

  private loadProcessesAccount() {
    if (!this.processes_account_initLoaded) {
    this.processes_account_initLoaded = true;
    this._dataService.getProcessesRelatedAccount(this.processesList)
      .then(accounts => {
        for (let acc in accounts) {
          let pIndex = this.processesList.findIndex(p => p.processInstanceId === accounts[acc].processCase.processInstanceId);
          if (pIndex >= 0) {
            this.processesList[pIndex].account = accounts[acc];
          }
        }
        this.processes_account_initLoaded = false;
      })
      .catch(error => {
        this._userFeedbackService.handleError("Error getting accounts", error);
        console.log(error);
        this.processes_account_initLoaded = false;
      });
    }
  }

  goToAccount(bpmProcess: BPMProcessInstance) {
    this.saveParams();
    this._router.navigate([
      PublicUrls.account.url,
      bpmProcess.account.accountId,
      bpmProcess.account.accountType,
      CoinConstants.NoCampaignRecordId,
      'processesList',
      bpmProcess.processInstanceId
    ]);
  }

  getProcessState(state: number): string {
    if (state === processStates.COMPLETE) return ' Complete';
    if (state === processStates.ACTIVE) return ' Active';
    if (state === processStates.ABORTED) return ' Aborted';
    return ' Unknown';
  }

  sortTable(sortType) {
    this.sort.isDesc = !this.sort.isDesc;
    if (this.sort.sortType != sortType) {
      this.sort.isDesc = true;
    }
    this.sort.sortType = sortType;
    this.pagination.currPage = 0;

    this.onSearch.emit(this.sort);
  }

  private saveParams() {
    if(this.hasToSaveParams){
      this._temporalStateService.processesListInfo = new ProcessesListInfo();
      this._temporalStateService.processesListInfo.currentPagination = this.pagination;
      this._temporalStateService.processesListInfo.currentParams = this.processesParams;
    }
  }

}
