import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { TasksListTableComponent } from './tasks-list-table.component';
import {PopoverConfig, PopoverModule} from "ngx-bootstrap";
import {WaitingBackendComponent} from "../waiting-backend/waiting-backend.component";
import {CoinDateTransformPipe} from "../../pipes/coin-date-transform.pipe";
import {NgbTabsetModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ToastrModule} from "ngx-toastr";
import {TasksListInfo, TemporalStateServiceService} from "../../services/temporal-state-service.service";
import {HeaderSorterComponent} from "../header-sorter/header-sorter.component";
import {dataServiceMock} from "../../../test-utils/dataServiceMock";
import {DataService} from "../../services/data.service";
import {UserFeedbackService} from "../../services/user-feedback.service";
import {SortOrder} from "../../models/sort-order";
import {Pagination} from "../../models/pagination";
import {SearchTaskInboxParams} from "../../models/search-task-inbox-params";

describe('TasksListTableComponent', () => {
  let component: TasksListTableComponent;
  let fixture: ComponentFixture<TasksListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgbTabsetModule, FormsModule, PopoverModule, HttpClientModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot() ],
      declarations: [ TasksListTableComponent, WaitingBackendComponent, CoinDateTransformPipe, HeaderSorterComponent ],
      providers: [ {provide: DataService, useValue: dataServiceMock }, PopoverConfig, TemporalStateServiceService, UserFeedbackService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListTableComponent);
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

  function tasksParams(withOwner: boolean) {
    let p = new SearchTaskInboxParams();
    p.WithOwner = withOwner;
    p.WithoutOwner = !withOwner;
    return p;
  }

  it('load accounts when new tasks list', fakeAsync(() => {
    let r = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(r, "getTasksRelatedAccount").and.returnValue(Promise.resolve([dataServiceMock.account4]));
    component.currentTaskServiceParams = new TasksListInfo(tasksParams(true));

    component.taskList = dataServiceMock.taskList;
    expect(component.taskList.length).toEqual(3);
    expect(component.taskList[0].account).toBeUndefined();

    fixture.detectChanges();

    component.ngOnChanges({taskList: component.taskList});

    tick(1);
    fixture.detectChanges();

    expect(component.taskList[0].account).not.toBeUndefined();
    expect(component.taskList[0].account.customer.mainContact.completeName).toEqual("Nick Furia");
  }));
});
