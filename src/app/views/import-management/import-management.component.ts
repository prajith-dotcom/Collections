import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import {UFNotification, UserFeedbackService} from "../../services/user-feedback.service";
import {UFSeverity} from "../../services/ufseverity";

@Component({
  selector: 'app-import-management',
  templateUrl: './import-management.component.html',
  styleUrls: ['./import-management.component.css']
})
export class ImportManagementComponent implements OnInit {

  waitingLoanCampaigns = false;
  waitingDepositCampaigns = false;
  constructor(
    private _dataService: DataService,
    private _userFeedbackService: UserFeedbackService
  ) { }

  ngOnInit() {
  }

  importLoans() {
    this.waitingLoanCampaigns = true;
    this._dataService.importLoanAccounts()
      .then(resp => {
        console.log(resp);
        this.waitingLoanCampaigns = false;
      })
      .catch(error => {
        let msg = 'Import Failed';
        this._userFeedbackService.handleNotification(new UFNotification(0, msg, UFSeverity.warn, error));
        this.waitingLoanCampaigns = false;
      });
  }

  importDeposits() {
    this.waitingDepositCampaigns = true;
    this._dataService.importDepositAccounts()
      .then(resp => {
        console.log(resp);
        this.waitingDepositCampaigns = false;
      })
      .catch(error => {
        let msg = 'Import Failed';
        this._userFeedbackService.handleNotification(new UFNotification(0, msg, UFSeverity.warn, error));
        this.waitingDepositCampaigns = false;
      });
  }

  disable(){
    return (this.waitingDepositCampaigns || this.waitingLoanCampaigns) ;
  }

}
