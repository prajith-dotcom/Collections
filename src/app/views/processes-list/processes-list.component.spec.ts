import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ProcessesListComponent } from './processes-list.component';
import {FormsModule} from "@angular/forms";
import {dataServiceMock} from "../../../test-utils/dataServiceMock";
import {DataService} from "../../services/data.service";
import {UserFeedbackService} from "../../services/user-feedback.service";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {By} from "@angular/platform-browser";

describe('ProcessesListComponent', () => {
  let component: ProcessesListComponent;
  let fixture: ComponentFixture<ProcessesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientModule, HttpClientTestingModule, ToastrModule.forRoot() ],
      declarations: [ ProcessesListComponent ],
      providers: [ {provide: DataService, useValue: dataServiceMock}, UserFeedbackService, ToastrService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loading process types and select firts by default', fakeAsync(() => {
    //spies
    let r = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(r, "bpm_getProcessTypes").and.returnValue(Promise.resolve(dataServiceMock.processTypes));

    fixture.detectChanges();

    // Initially disabled
    checkButtonDisabled(true);

    //function calls
    component.bpm_types_initLoaded = false;
    component.loadProcessTypes();

    tick();
    fixture.detectChanges();

    checkButtonDisabled(false);

    //process types
    expect(component.bpm_process_types.length).toEqual(2);
    expect(component.bpm_process_types[0].processId).toEqual("1");
    expect(component.bpm_process_types[1].processId).toEqual("2");
    expect(component.bpm_process_types[0].processName).toEqual("ProcessType1");
    expect(component.bpm_process_types[1].processName).toEqual("ProcessType2");

    expect(component.params.ProcessType).toEqual(component.bpm_process_types[0]);
  }));

  function checkButtonDisabled(isDisabled:boolean){
    let buttonSearch = fixture.debugElement.query(By.css('button')).nativeElement.disabled;
    expect(buttonSearch).toEqual(isDisabled);
  }

  it('Button Search disabled if no proces types are found', fakeAsync(() => {
    //spies
    let r = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(r, "bpm_getProcessTypes").and.returnValue(Promise.resolve([]));

    fixture.detectChanges();

    // Initially disabled
    checkButtonDisabled(true);

    //function calls
    component.bpm_types_initLoaded = false;
    component.loadProcessTypes(); // empty array returned

    tick();
    fixture.detectChanges();

    checkButtonDisabled(true);
  }));

});
