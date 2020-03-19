import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalDirective} from "ngx-bootstrap";
import {Disaster} from "../../models/disaster";

const DisasterType = {
  DR: 'Major disaster',
  EM: 'Emergency',
  FM: 'Fire management'
};

@Component({
  selector: 'disaster-modal',
  templateUrl: './disaster-modal.component.html',
  styleUrls: ['./disaster-modal.component.css']
})
export class DisasterModalComponent implements OnInit {

  @Input() disasters: Disaster[] = [];
  private _currentDisaster: Disaster = null;
  private _disasterType = DisasterType;

  @ViewChild('disasterModal') private _modal: ModalDirective;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    this._currentDisaster = null;
    this.modalService.open(this._modal, {size: 'lg'});
  }

  private toggleExpandDisaster(disaster: Disaster) {
    if (this._currentDisaster && this._currentDisaster.id === disaster.id) this._currentDisaster = null;
    else this._currentDisaster = disaster;
  }

  private isCurrentDisaster(disaster: Disaster): boolean {
    return this._currentDisaster && this._currentDisaster.id === disaster.id;
  }

  private hasOneDisaster(): boolean {
    return this.disasters.length === 1;
  }
}
