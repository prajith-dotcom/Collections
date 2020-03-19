import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchTaskInboxParams} from "../../models/search-task-inbox-params";
import {ProcessesListInfo, TasksListInfo} from "../../services/temporal-state-service.service";
import {SearchProcessesListParams} from "../../models/search-processes-list-params";
import {DataService} from "../../services/data.service";
import {UserFeedbackService} from "../../services/user-feedback.service";
import {BPMProcessInstance, BPMProcessType} from "../../models/bpm-case";

@Component({
  selector: 'processes-list',
  templateUrl: './processes-list.component.html',
  styleUrls: ['./processes-list.component.css']
})
export class ProcessesListComponent implements OnInit {
  @Output() onSearch = new EventEmitter<any>();
  @Input() currentProcessesServiceParams: ProcessesListInfo = new ProcessesListInfo();

  private isSearchButtonClicked: boolean = false;
  private isShowArrow: boolean = false;

  params: SearchProcessesListParams = new SearchProcessesListParams();
  bpm_process_types: BPMProcessType[] = [];
  bpm_types_initLoaded: boolean = false;

  constructor(private _dataService: DataService, private _userFeedbackService: UserFeedbackService) {}

  ngOnChanges(changes) {
    if (changes.currentProcessesServiceParams && this.currentProcessesServiceParams && this.currentProcessesServiceParams.currentParams!=null) {
      this.setParams();
    }
  }

  setParams(){
    this.params = this.currentProcessesServiceParams.currentParams.clone();
    this.isSearchButtonClicked = true;
    this.isShowArrow = true;
  }

  ngOnInit() {
    this.loadProcessTypes();
  }

  showForm(value: boolean){
    this.isSearchButtonClicked = value;
  }

  //emits the params to the parent
  search() {
    this.currentProcessesServiceParams.currentParams = this.params.clone();
    this.isSearchButtonClicked = true;
    this.isShowArrow = true;
    this.onSearch.emit(this.params);
  }

  loadProcessTypes() {
    if (!this.bpm_types_initLoaded) {
      this.bpm_process_types = null;
      this.bpm_types_initLoaded = true;
      this._dataService.bpm_getProcessTypes()
        .then(r => {
          this.bpm_process_types = r;
          if (r.length > 0) this.params.ProcessType = r[0];
        })
        .catch(error => {
          this._userFeedbackService.handleError("Error getting BPM process types", error);
          console.log(error)
        });
    }
  }

}
