import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomerNote} from "../../models/customer-note";
import {DataService} from "../../services/data.service";
import {UserFeedbackService} from "../../services/user-feedback.service";

@Component({
  selector: 'customer-notes',
  templateUrl: './customer-notes.component.html',
  styleUrls: ['./customer-notes.component.css']
})
export class CustomerNotesComponent implements OnInit {
  @Input() notes: CustomerNote[] = null;
  @Input() searching: boolean = false;
  @Input() isEditable: boolean = false;
  @Output() onRefreshAlerts = new EventEmitter<boolean>();

  rowInEdition: number = null;
  auxiliarMsg: string = null;
  isSaving: boolean = false;

  constructor(private _dataService: DataService, private _userFeedbackService: UserFeedbackService) { }

  ngOnInit() {
  }

  toggleEdit(index?: number, msg?: string) {
    if (!this.isSaving) {
      this.rowInEdition = index;
      if (this.rowInEdition != null) {
        this.auxiliarMsg = msg;
      }
      else this.auxiliarMsg = null;
    }
  }

  saveCustomerMessage(note: CustomerNote) {
    if (this.canSave(note.message)) {
      this.isSaving = true;
      this._dataService.updateCustomerMessage(note, this.auxiliarMsg).then(() => {
        this.rowInEdition = null;
        this.auxiliarMsg = null;
        this.isSaving = false;
        this._userFeedbackService.handleSuccess("Message updated");

        this.notes = null;
        this.onRefreshAlerts.emit();
      }).catch(err => {
        this._userFeedbackService.handleError("Error updating the message", err);
      });
    }
  }

  canSave(msg: string) {
    return this.auxiliarMsg != null && this.auxiliarMsg != "" && this.auxiliarMsg != msg && !this.isSaving;
  }

}
