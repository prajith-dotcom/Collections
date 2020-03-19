import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchTaskInboxParams} from "../../models/search-task-inbox-params";
import {
  AccountListInfo, TasksListInfo,
  TemporalStateServiceService
} from "../../services/temporal-state-service.service";
import {BPMTask} from "../../models/bpm-case";
import {Pagination} from "../../models/pagination";
import {PublicUrls} from "../../routing-constants";
import {Router} from "@angular/router";
import {CoinConstants} from "../../services/coin-constants";
import {DataService} from "../../services/data.service";
import {UserFeedbackService} from "../../services/user-feedback.service";
import {SortOrder} from "../../models/sort-order";

@Component({
  selector: 'tasks-list-table',
  templateUrl: './tasks-list-table.component.html',
  styleUrls: ['./tasks-list-table.component.css']
})
export class TasksListTableComponent implements OnInit {
  @Input() taskParams: SearchTaskInboxParams;
  @Input() currentTaskServiceParams: TasksListInfo;
  @Input() taskList: BPMTask[] = null;
  @Output() onSearch = new EventEmitter<SortOrder>();
  @Input() pagination: Pagination;
  @Input() sort: SortOrder;
  @Input() hasToSaveParams: boolean = false;
  @Input() searching: boolean = false;

  private tasks_account_initLoaded: boolean = false;

  constructor(private _router: Router, private _temporalStateService: TemporalStateServiceService,
              private _dataService: DataService, private _userFeedbackService: UserFeedbackService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes){
    if(changes.currentTaskServiceParams && this.currentTaskServiceParams && this.currentTaskServiceParams.currentPagination){
      this.setCurrentPagination();
    }
    if (changes.taskList && this.taskList && this.taskList.length > 0) {
      this.loadTasksAccount();
    }
  }

  setCurrentPagination(){
    this.pagination.currPage = this.currentTaskServiceParams.currentPagination.currPage;
  }

  private loadTasksAccount() {
    this.tasks_account_initLoaded = true;
    this._dataService.getTasksRelatedAccount(this.taskList)
      .then(accounts => {
        for (let acc in accounts) {
          let taskIndex = this.taskList.findIndex(t => t.taskProcessInstanceId === accounts[acc].processCase.processInstanceId);
          if (taskIndex >= 0) {
            this.taskList[taskIndex].account = accounts[acc];
          }
        }
      })
      .catch(error => {
        this._userFeedbackService.handleError("Error getting accounts", error);
        console.log(error)
      });
  }

  goToAccount(bpmTask: BPMTask) {
    this.saveParams();
    this._router.navigate([
      PublicUrls.account.url,
      bpmTask.account.accountId,
      bpmTask.account.accountType,
      CoinConstants.NoCampaignRecordId,
      'processesList',
      bpmTask.taskProcessInstanceId
    ]);
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
      this._temporalStateService.tasksListInfo = new TasksListInfo();
      this._temporalStateService.tasksListInfo.currentPagination = this.pagination;
      this._temporalStateService.tasksListInfo.currentParams = this.taskParams;
    }
  }

}
