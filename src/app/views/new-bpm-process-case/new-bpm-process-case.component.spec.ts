import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBpmProcessCaseComponent } from './new-bpm-process-case.component';
import {WaitingBackendComponent} from "../waiting-backend/waiting-backend.component";
import {FormsModule} from "@angular/forms";
import {DataService} from "../../services/data.service";
import {dataServiceMock} from "../../../test-utils/dataServiceMock";
import {UserFeedbackService} from "../../services/user-feedback.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {GlobalStateService} from "../../services/global-state.service";
import {globalStateServiceMock} from "../../../test-utils/globalStateServiceMock";

describe('NewBpmProcessCaseComponent', () => {
  let component: NewBpmProcessCaseComponent;
  let fixture: ComponentFixture<NewBpmProcessCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientModule, HttpClientTestingModule, ToastrModule.forRoot() ],
      declarations: [ NewBpmProcessCaseComponent, WaitingBackendComponent ],
      providers: [ {provide: DataService, useValue: dataServiceMock}, UserFeedbackService, ToastrService,
        {provide:GlobalStateService, useValue: globalStateServiceMock} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBpmProcessCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
