import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from "../../models/customer";
import {Phone} from "../../models/phone";
import {MakeCallEvent} from "../manage-account/manage-account.component";

@Component({
  selector: 'customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent implements OnInit {
  @Input() customers: Customer[];
  @Input() searching: boolean;
  @Output() onCall = new EventEmitter<MakeCallEvent>();

  private extraInfo: Object = {};

  constructor() { }
  ngOnInit() {
  }

  // Parameter customer "cust" will be refreshed with the customer information inside function "getInfoCustomer"
  openExtraInfoCustomer(cust: Customer) {
    this.extraInfo[cust.id] = true;
  }

  private isExtraInfoVisible(customer: Customer): boolean {
    return this.extraInfo[customer.id];
  }

  call(phone: Phone) {
    let event = new MakeCallEvent();
    event.phone = phone;
    event.isCoBorrower = true;
    this.onCall.emit(event);
  }

}
