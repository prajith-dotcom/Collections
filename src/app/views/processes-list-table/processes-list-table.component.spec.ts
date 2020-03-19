import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ProcessesListTableComponent } from './processes-list-table.component';
import {HeaderSorterComponent} from "../header-sorter/header-sorter.component";
import {ProcessesListInfo, TemporalStateServiceService} from "../../services/temporal-state-service.service";
import {NgbTabsetModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {dataServiceMock} from "../../../test-utils/dataServiceMock";
import {DataService} from "../../services/data.service";
import {WaitingBackendComponent} from "../waiting-backend/waiting-backend.component";
import {CoinDateTransformPipe} from "../../pipes/coin-date-transform.pipe";
import {UserFeedbackService} from "../../services/user-feedback.service";
import {Pagination} from "../../models/pagination";
import {SortOrder} from "../../models/sort-order";
import * as moment from "moment";
import {BPMProcessInstance, BPMProcessType, processStates} from "../../models/bpm-case";
import {SearchProcessesListParams} from "../../models/search-processes-list-params";
import {DateAgoTransformPipe} from "../../pipes/date-ago-transform.pipe";

describe('ProcessesListTableComponent', () => {
  let component: ProcessesListTableComponent;
  let fixture: ComponentFixture<ProcessesListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgbTabsetModule, FormsModule, HttpClientModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot() ],
      declarations: [ ProcessesListTableComponent, HeaderSorterComponent, WaitingBackendComponent, CoinDateTransformPipe, DateAgoTransformPipe ],
      providers: [ {provide: DataService, useValue: dataServiceMock }, TemporalStateServiceService, UserFeedbackService, ToastrService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessesListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.sort = new SortOrder(true, null); //isDesc = true
    component.pagination = new Pagination(0,10);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sort table', () => {
    expect(component.sort.isDesc).toBeTruthy();
    expect(component.sort.sortType).toBeNull();

    component.sortTable('id');
    expect(component.sort.isDesc).toBeTruthy();
    expect(component.sort.sortType).toEqual('id');

    component.sortTable('id');
    expect(component.sort.isDesc).toBeFalsy();
    expect(component.sort.sortType).toEqual('id');
  });

  it('sort table and every new type sorts descending', () => {
    expect(component.sort.isDesc).toBeTruthy();
    expect(component.sort.sortType).toBeNull();

    component.sortTable('id');
    expect(component.sort.isDesc).toBeTruthy();
    expect(component.sort.sortType).toEqual('id');

    component.sortTable('name');
    expect(component.sort.isDesc).toBeTruthy();
    expect(component.sort.sortType).toEqual('name');
  });

  it('sort table and sets page to 0', () => {
    expect(component.pagination.currPage).toEqual(0);
    expect(component.pagination.pageSize).toEqual(10);

    component.pagination.currPage = 2;
    expect(component.pagination.currPage).toEqual(2);

    component.sortTable('name');
    expect(component.pagination.currPage).toEqual(0);
  });

  it('getProcessState function to get the process status', () => {
    let process = new BPMProcessInstance();
    process.processInstanceState = processStates.ACTIVE;
    expect(component.getProcessState(process.processInstanceState)).toEqual(' Active');

    process.processInstanceState = processStates.COMPLETE;
    expect(component.getProcessState(process.processInstanceState)).toEqual(' Complete');
  });

  function processesParams(processType: BPMProcessType) {
    let p = new SearchProcessesListParams();
    p.ProcessType = processType;
    return p;
  }

  it('load accounts when new processes list', fakeAsync(() => {
    let r = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(r, "getProcessesRelatedAccount").and.returnValue(Promise.resolve([dataServiceMock.account4]));
    component.currentProcessesServiceParams = new ProcessesListInfo(
      processesParams(
        new BPMProcessType(
          "1", "PT"
        )));

    component.processesList = dataServiceMock.processesList;
    expect(component.processesList.length).toEqual(3);
    expect(component.processesList[0].account).toBeUndefined();

    fixture.detectChanges();

    component.ngOnChanges({processesList: component.processesList});

    tick(1);
    fixture.detectChanges();

    expect(component.processesList[0].account).not.toBeUndefined();
    expect(component.processesList[0].account.customer.mainContact.completeName).toEqual("Nick Furia");
  }));

});
