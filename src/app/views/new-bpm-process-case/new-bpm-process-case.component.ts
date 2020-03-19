import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BPMProcessType} from "../../models/bpm-case";
import {GlobalStateService} from "../../services/global-state.service";
import {UserFeedbackService} from "../../services/user-feedback.service";
import {DataService} from "../../services/data.service";
import {Account} from "../../models/account";

@Component({
  selector: 'new-bpm-process-case',
  templateUrl: './new-bpm-process-case.component.html',
  styleUrls: ['./new-bpm-process-case.component.css']
})
export class NewBpmProcessCaseComponent implements OnInit {
  @Input() account: Account = null;
  @Input() saveText: String = "Save";
  @Input() showSave: boolean = false;
  @Output() onDefaultCaseCreated = new EventEmitter<number>();
  @Output() caseCreated = new EventEmitter<number>();
  @Output() onCancel = new EventEmitter<number>();

  private waitingResponse: boolean = false;
  private bpm_notes = "";
  private bpm_process_types: BPMProcessType[] = [];
  private bpm_process_type: BPMProcessType = null;
  private searchingBPMProcessTypes: boolean = false;


  constructor(private _dataService: DataService, private _userFeedbackService: UserFeedbackService,
              private _globalStateService: GlobalStateService) { }

  ngOnInit() {
    this.loadProcessTypes()
  }

  //Go back button --> return to New call record component
  goToRecordCall() {
    this.onCancel.emit();
  }

  loadProcessTypes() {
    this.bpm_process_types = [];
    this.searchingBPMProcessTypes = true;
    this._dataService.bpm_getProcessTypes()
      .then(r => {
        this.bpm_process_types = r;
        if (r.length > 0) this.bpm_process_type = r[0];
        this.searchingBPMProcessTypes = false;
      })
      .catch(error => {
        this._userFeedbackService.handleError("Error getting BPM process types", error);
        console.log(error);
        this.searchingBPMProcessTypes = false;
      });
  }

  createBPMCase(isDefaultSave: boolean) {
    this.waitingResponse = true;
    // Create the BPM process
    this._dataService.bpm_createCase(this.account, this.bpm_process_type, this.bpm_notes, this._globalStateService.loggedAgent).then(res => {
      if (!isDefaultSave) {
        this.caseCreated.emit();
      }
      else {
        this.onDefaultCaseCreated.emit();
      }
      this.waitingResponse = false;
      this.bpm_notes = "";
    }).catch(error => {
      this._userFeedbackService.handleError("Error creating Coin record for case", error);
      console.log(error);
      this.waitingResponse = false;
    });
  }

}
