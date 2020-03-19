import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TasksListInfo} from "../../services/temporal-state-service.service";
import {SearchTaskInboxParams} from "../../models/search-task-inbox-params";

@Component({
  selector: 'task-inbox',
  templateUrl: './task-inbox.component.html',
  styleUrls: ['./task-inbox.component.css']
})
export class TaskInboxComponent implements OnInit {
  @Output() onSearch = new EventEmitter<any>();
  @Input() currentTaskServiceParams: TasksListInfo = new TasksListInfo();

  params: SearchTaskInboxParams = new SearchTaskInboxParams();

  constructor() {}

  ngOnChanges(changes) {
    if (changes.currentTaskServiceParams && this.currentTaskServiceParams && this.currentTaskServiceParams.currentParams != null) {
      this.setParams();
    }
  }

  setParams(){
    this.params = this.currentTaskServiceParams.currentParams.clone();
  }

  ngOnInit() {
    if (this.currentTaskServiceParams && this.currentTaskServiceParams.currentParams == null) {
      this.search();
    }
  }

  //emits the params to the parent
  search(withOwner: boolean = true) {
    this.params.WithOwner = withOwner;
    this.params.WithoutOwner = !withOwner;
    this.currentTaskServiceParams.currentParams = this.params.clone();
    this.onSearch.emit(this.params);
  }

}
