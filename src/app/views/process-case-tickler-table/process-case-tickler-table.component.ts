import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ProcessCaseTickler} from "../../models/process-case-tickler";
import {ProcessCase} from "../../models/process-case";
import {TicklerCaseModel} from "../../models/tickler-case-model";
import {TicklerType} from "../../models/tickler-types";
import {DataService} from "../../services/data.service";
import {TicklerAttribute} from "../../models/tickler-attribute";
import {CampaignListAttribute} from "../../models/campaign-list-attribute";
import {UserFeedbackService} from "../../services/user-feedback.service";
import {GlobalStateService} from "../../services/global-state.service";
import {ROLE_STANDARD_CODES} from "../../models/role";
import {ConfirmationModalComponent} from "../confirmation-modal/confirmation-modal.component";
import {Account} from "../../models/account";


@Component({
  selector: 'process-case-tickler-table',
  templateUrl: './process-case-tickler-table.component.html',
  styleUrls: ['./process-case-tickler-table.component.css']
})
export class ProcessCaseTicklerTableComponent implements OnInit {

  @Input() processCaseTicklers: ProcessCaseTickler[] = null;
  @Input() ticklerTypes: TicklerType[] = null;
  @Input() currentProcessCase: ProcessCase = null;
  @Input() ticklerAttributes: TicklerAttribute[] = null;
  @Input() waitingResponse: boolean = false;
  @Input() searchingCaseTicklers: boolean = false;
  @Input() isAccountPage: boolean = false;
  @Input() account: Account;
  @Output() onAddTicklerCase = new EventEmitter<TicklerCaseModel>();
  @Output() onDeleteTicklerCase = new EventEmitter<ProcessCaseTickler>();
  @Output() onCancel = new EventEmitter<boolean>();
  @Input() isCreating: boolean = false;
  private ticklerAttributesVisibles = {};
  private closeResult: string;
  private waitingToRemove: number[] = [];

  @ViewChild('confirmationModal') private _confirmationModal: ConfirmationModalComponent;

  constructor(private _dataService:DataService, private _userFeedbackService: UserFeedbackService,
              private _globalStateService: GlobalStateService) {
  }

  ngOnChanges(changes) {
    if (changes.currentProcessCase) {
      this.ticklerAttributesVisibles = {};
    }
  }

  ngOnInit() {
    this.loadTicklerAttributes();
  }

  onNewTicklerCancelled() {
    this.onCancel.emit();
  }

  onNewTicklerAdded() {
    this.onAddTicklerCase.emit();
  }

  //load ticker attributes
  loadTicklerAttributes() {
    this._dataService.getTicklerAttributes().then(res => {
      this.ticklerAttributes = res;
    }).catch(err => {
      console.log("Error retrieving tickler attributes", err);
    })
  }

  private toogleAttributesDetail(processCaseTickler: ProcessCaseTickler) {
    this.ticklerAttributesVisibles["id" + processCaseTickler.id] = !this.ticklerAttributesVisibles["id" + processCaseTickler.id];
  }

  private isTicklerAttributeVisible(processCaseTickler: ProcessCaseTickler) {
    return this.ticklerAttributesVisibles["id" + processCaseTickler.id];
  }

  private ticklerAttributeName(processCaseTickler: ProcessCaseTickler, at: CampaignListAttribute): string {
    let ticklerAttribute: TicklerAttribute = null;
    let processCaseAttribute = processCaseTickler.attributes.find(atr => atr.code == at.code);
    if(this.ticklerAttributes){
      ticklerAttribute = this.ticklerAttributes.find(atr => atr.code == processCaseAttribute.code);
    }
    return ticklerAttribute ? ticklerAttribute.name : null;
  }

  private ticklerAttributeValues(processCaseTickler: ProcessCaseTickler, at: CampaignListAttribute): string {
    let att = processCaseTickler.attributes.find(atr => atr.code == at.code);
    return att.plainValues + " ";
  }

  deleteCaseTickler(caseTickler: ProcessCaseTickler) {
    let index = null;
    this.waitingToRemove.push(caseTickler.id);
    this._dataService.deleteCaseTickler(caseTickler, this._globalStateService.loggedAgent).then(() => {
      if (caseTickler.id) {
        // remove index
        index = this.waitingToRemove.indexOf(caseTickler.id);
        this.waitingToRemove.splice(index, 1);
      }
      this.ticklerAttributesVisibles = {};
      this.onDeleteTicklerCase.emit(caseTickler);
      this._userFeedbackService.handleSuccess("Case tickler removed");
    }).catch(err => {
      this._userFeedbackService.handleError("Error removing case tickler", err);
      this.waitingToRemove.splice(index, 1);
    });
  }

  //return index when waiting to remove
  private isWaiting(caseTickler: ProcessCaseTickler) {
    return this.waitingToRemove.indexOf(caseTickler.id) > -1
  }

  get canDeleteCaseTickler(){
    return this._globalStateService.loggedAgentHasRoleCode(ROLE_STANDARD_CODES.TICKLER_DELETE)
  }

  openConfirmationModal(caseTickler: ProcessCaseTickler) {
    this._confirmationModal.open(caseTickler);
  }

  isOverflown(tickler) {
    return tickler != null && tickler.ticklerDescription != null && tickler.ticklerDescription.length > 15;
  }

  openPdf(caseTickler: ProcessCaseTickler) {
    // Base64 to readable document
    let byteCharacters = atob(caseTickler.document);

    let byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    let byteArray = new Uint8Array(byteNumbers);
    let blob = new Blob([byteArray], {type: "application/pdf"});
    window.open(URL.createObjectURL(blob));
  }

}
