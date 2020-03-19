import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {UserFeedbackService} from "../../services/user-feedback.service";
import * as SvgPanZoom from 'svg-pan-zoom';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {DataService} from "../../services/data.service";
import {
  BPMCase, BPMProcessInstance, BPMTask, BPMVariable, processStates
} from "../../models/bpm-case";
import {Agent} from "../../models/agent";
import {GlobalStateService} from "../../services/global-state.service";
import {ConfirmationModalComponent} from "../confirmation-modal/confirmation-modal.component";


@Component({
  selector: 'process-instance',
  templateUrl: './process-instance.component.html',
  styleUrls: ['./process-instance.component.css']
})
export class ProcessInstanceComponent implements OnInit, OnChanges {

  @Input() bpmCase: BPMCase = null;
  @Output() onAborted = new EventEmitter<number>();

  public instanceStatus: BPMProcessInstance = null;

  @ViewChild('confirmationModal') private _confirmationModal: ConfirmationModalComponent;
  @ViewChild('diagramModal') private _diagramModal: ConfirmationModalComponent;

  svg: SafeHtml;

  taskType = {
    "EventNode": "Event",
    "HumanTaskNode": "Task"
  };

  private searchingInputVariables: boolean = true;
  private searchingSignals: boolean = true;
  private searchingCompletedTasks: boolean = true;
  private searchingDiagram: boolean = true;

  private waitingAbortResponse: boolean = false;
  private waitingCompleteTaskResponse: boolean = false;
  private waitingSignalResponse: boolean = false;

  constructor(
    private _userFeedbackService: UserFeedbackService,
    private _dataService: DataService,
    private _sanitizer: DomSanitizer,
    private _globalStateService: GlobalStateService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.bpmCase) {
      this.refreshData();
    }
  }

  processStatesEnum = processStates;

  public completeTask(task: BPMTask, inputVariables: BPMVariable[]) {
    this.waitingCompleteTaskResponse = true;

    let agent: Agent = this._globalStateService.loggedAgent;
    this._dataService.completeTask(task, inputVariables, this.bpmCase, agent)
      .then(res => {
          this.refreshData();
          this.waitingCompleteTaskResponse = false;
      })
      .catch(error => {
        this._userFeedbackService.handleError("Error completing task", error);
        console.log(error);
        this.waitingCompleteTaskResponse = false;
      });
  }

  public signal(signal: string) {
    this.waitingSignalResponse = true;

    this._dataService.doSignal(this.bpmCase, signal)
      .then(res => {
        this.refreshData();
        this.waitingSignalResponse = false;
      })
      .catch(error => {
        this._userFeedbackService.handleError("Error sending signal", error);
        console.log(error);
        this.waitingSignalResponse = false;
      });
  }

  isCompleteTaskEnabled(inputVariables: BPMVariable[]) {
    for (let v in inputVariables) {
      if (inputVariables[v].value == null || inputVariables[v].value === '') {
        return false;
      }
    }
    return !this.areButtonsDisabled();
  }

  getProcessState(): string {
    if (this.instanceStatus.processInstanceState === processStates.COMPLETE) return ' Complete';
    if (this.instanceStatus.processInstanceState === processStates.ACTIVE) return ' Active';
    if (this.instanceStatus.processInstanceState === processStates.ABORTED) return ' Aborted';
    return ' Unknown';
  }

  openConfirmationModal() {
    this._confirmationModal.open();
  }

  abortProcess(note?: string) {
    this.waitingAbortResponse = true;

    this._dataService.abortProcess(this.bpmCase).then(() => {
      if (note != null && note != '') {
        this._dataService.sendAbortProcessNote(this.bpmCase, note).then(() => {
          this.refreshWhenAborting();
        }).catch(err => {
          this._userFeedbackService.handleError("Error sending the abort process note");
          this.refreshWhenAborting();
        });
      }
      else {
        this.refreshWhenAborting();
      }
    }).catch(err => {
      this._userFeedbackService.handleError("Error aborting the process");
      this.waitingAbortResponse = false;
    });
  }

  private refreshWhenAborting() {
    this.onAborted.emit();
    this.waitingAbortResponse = false;
  }

  openDiagramModal() {
    this._diagramModal.open();
  }

  areButtonsDisabled() {
    return this.waitingCompleteTaskResponse || this.waitingSignalResponse || this.waitingAbortResponse;
  }

  protected refreshData() {
    this.searchingInputVariables = true;
    this.searchingSignals = true;
    this.searchingCompletedTasks = true;
    this.searchingDiagram = true;

    this.instanceStatus = null;
    this.svg = "";

    this._dataService.getCompleteInfoForCase(this.bpmCase)
      .subscribe(val => {
        try {
          this.instanceStatus = val;

          if (this.instanceStatus.inputVariables != null || (this.instanceStatus.currentTask != null && this.instanceStatus.currentTask.length == 0)) {
            this.searchingInputVariables = false;
          }

          if (this.instanceStatus.signals != null) {
            this.searchingSignals = false;
          }

          if (this.instanceStatus.historicTasks != null) {
            this.searchingCompletedTasks = false;
          }

          if (this.instanceStatus.processSvg != null) {
            this.searchingDiagram = false;
            this.svg = this._sanitizer.bypassSecurityTrustHtml(this.instanceStatus.processSvg);
          }

          if (!this.searchingInputVariables && !this.searchingSignals && !this.searchingCompletedTasks) {
            window.scrollTo(0, 650);
          }
        }
        catch (error) {
          console.log("Error managing case", error);
          this._userFeedbackService.handleError("Error dealing with case's data", error);
        }
      },
      error => console.log("error")
    );
  }

}
