import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ProcessInstanceComponent } from './process-instance.component';
import {WaitingBackendComponent} from "../waiting-backend/waiting-backend.component";
import {CoinDateTransformPipe} from "../../pipes/coin-date-transform.pipe";
import {NgbModal, NgbTabsetModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {HeaderSorterComponent} from "../header-sorter/header-sorter.component";
import {DataService} from "../../services/data.service";
import {dataServiceMock} from "../../../test-utils/dataServiceMock";
import {TemporalStateServiceService} from "../../services/temporal-state-service.service";
import {UserFeedbackService} from "../../services/user-feedback.service";
import {GlobalStateService} from "../../services/global-state.service";
import {globalStateServiceMock} from "../../../test-utils/globalStateServiceMock";
import {BPMCase, BPMTask, BPMVariable} from "../../models/bpm-case";
import 'rxjs/add/observable/of';
import {of} from "rxjs/index";
import {DateAgoTransformPipe} from "../../pipes/date-ago-transform.pipe";
import {ConfirmationModalComponent} from "../confirmation-modal/confirmation-modal.component";
import {DiagramModalComponent} from "../diagram-modal/diagram-modal.component";
import {NgbModalStack} from "@ng-bootstrap/ng-bootstrap/modal/modal-stack";

describe('ProcessInstanceComponent', () => {
  let component: ProcessInstanceComponent;
  let fixture: ComponentFixture<ProcessInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgbTabsetModule, FormsModule, HttpClientModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot() ],
      declarations: [ ProcessInstanceComponent, HeaderSorterComponent, WaitingBackendComponent, CoinDateTransformPipe,
        DateAgoTransformPipe, ConfirmationModalComponent, DiagramModalComponent ],
      providers: [ {provide: DataService, useValue: dataServiceMock }, TemporalStateServiceService, UserFeedbackService,
        ToastrService, {provide:GlobalStateService, useValue: globalStateServiceMock}, NgbModal, NgbModalStack ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessInstanceComponent);
    component = fixture.componentInstance;

    component.bpmCase = new BPMCase("1");

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('complete task and refresh data', fakeAsync(() => {
    //spies
    let r = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(r, "completeTask").and.returnValue(Promise.resolve(200));
    let spy2 = spyOn(r, "getCompleteInfoForCase").and.returnValue(of(dataServiceMock.completeInfo));

    fixture.detectChanges();

    expect(component.instanceStatus).toBeNull();

    // Completing a task, function refreshData is called
    component.completeTask(new BPMTask(2, 'T1'), [new BPMVariable('V1', null, true)]);

    tick(1500);
    fixture.detectChanges();

    expect(component.instanceStatus).not.toBeNull();
    expect(component.instanceStatus.processInstanceId).toEqual(111);
    expect(component.instanceStatus.historicTasks.length).toEqual(3);
    expect(component.instanceStatus.currentTask[0].taskId).toEqual(1);
    expect(component.instanceStatus.inputVariables.length).toEqual(4);
    expect(component.instanceStatus.signals.length).toEqual(2);
  }));
});
